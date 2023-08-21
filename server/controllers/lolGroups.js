import LolGroupDetails from '../models/lolGroupDetails.js'; 
import mongoose from 'mongoose';
import express from 'express';

const router = express.Router();

export const getLolGroups = async (req,res) => {

    const { page } = req.query;

    try { 
        const LIMIT = 5;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
        const total = await LolGroupDetails.countDocuments({});
        
        const lolGroups = await LolGroupDetails.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.status(200).json({ data: lolGroups, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getLolGroup = async (req,res) => {

    const { id } = req.params;

    try { 
       const lolGroup = await LolGroupDetails.findById(id);
       
       res.status(200).json((lolGroup));
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getLolGroupsBySearch = async (req, res) => {
    const { searchQuery, gameMode, tier } = req.query;

    console.log(searchQuery, gameMode, tier);
    try {
        const name = new RegExp(searchQuery, 'i');

        const lolGroups = await LolGroupDetails.find({ $or: [{ name }, { gameMode }, { tier }]  });
        
        res.json({ data: lolGroups });
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createLolGroup = async (req, res) => {
    const group = req.body;
    
    const newLolGroup = new LolGroupDetails({...group, creator: req.userId, createdAt: new Date().toISOString()});

    try {
        await newLolGroup.save();

        res.status(201).json(newLolGroup); 
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateLolGroup = async (req, res) => {
    const { id: _id } = req.params;
    const group = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No group with that id');

    const updatedLolGroup = await LolGroupDetails.findByIdAndUpdate(_id, {...group, _id}, {new: true});

    res.json(updatedLolGroup);
}

export const deleteLolGroup = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No group with that id');

    await LolGroupDetails.findByIdAndRemove(id);

    res.json({message: 'Group deleted successfully'});
}

export const joinLolGroup = async (req,res) => {
    const { id } = req.params;

    if(!req.userId){
        return res.json({ message: "Unathenticated" });
    } 

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No group with that id');

    const group = await LolGroupDetails.findById(id);

    const index = group.peopleCount.findIndex((id) => id === String(req.userId));

    if(index === -1){
        group.peopleCount.push(req.userId)
    } else {
        group.peopleCount = group.peopleCount.filter((id) => id !== String(req.userId));
    }

    const joinedLolGroup = await LolGroupDetails.findByIdAndUpdate(id, group, { new: true });

    res.status(200).json(joinedLolGroup);
}

export const commentLolGroup = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const lolGroup = await LolGroupDetails.findById(id);

    lolGroup.comments.push(value);

    const updatedLolGroup = await LolGroupDetails.findByIdAndUpdate(id, lolGroup, { new: true });

    res.json(updatedLolGroup);
}

export default router;