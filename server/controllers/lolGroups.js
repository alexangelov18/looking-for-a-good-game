import LolGroupDetails from '../models/lolGroupDetails.js'; 
import mongoose from 'mongoose';

export const getLolGroups = async (req,res) => {
    try {
        const lolGroupDetails = await LolGroupDetails.find();

        res.status(200).json(lolGroupDetails);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createLolGroup = async (req, res) => {
    const group = req.body;
    
    const newLolGroup = new LolGroupDetails(group);

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
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No group with that id');

    const group = await LolGroupDetails.findById(id);
    const joinedLolGroup = await LolGroupDetails.findByIdAndUpdate(id, { peopleCount: group.peopleCount + 1}, { new: true });

    res.json(joinedLolGroup);
}