import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { paper, form, formItem, buttonSubmit } from './styles';
import { useDispatch } from 'react-redux';
import { createLolGroup, updateLolGroup } from '../../actions/lolGroups';
import { useSelector } from 'react-redux';

const LolForm = ({currentId, setCurrentId}) => {

    const [lolGroupData, setLolGroupData] = useState({
        title: '', creator: '', description: '',gameMode: '', tier: '', division: '', region: '', willPlayOnDate: '', willPlayOnTime: ''
    });

    const dispatch = useDispatch();
    
    const lolGroup = useSelector((state) => currentId ? state.lolGroups.find((g) => g._id === currentId) : null);

    useEffect(() => {
        if(lolGroup) setLolGroupData(lolGroup);
    }, [lolGroup]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updateLolGroup(currentId, lolGroupData));
        } else {
            dispatch(createLolGroup(lolGroupData));
        }

        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setLolGroupData({ title: '', creator: '', description: '',gameMode: '', tier: '', division: '', region: '', willPlayOnDate: '', willPlayOnTime: ''});
    };
    
    return (
        <Paper sx={paper}>
            <form autoComplete='off' noValidate sx={form} onSubmit={handleSubmit}>
                <Typography sx={formItem} variant='h6'>{currentId ? 'Editing' : 'Creating'} League of Legends Group</Typography>
                <TextField sx={formItem} name='creator' variant='outlined' label='Creator' fullWidth value={lolGroupData.creator} onChange={(e) => setLolGroupData({ ...lolGroupData, creator: e.target.value })}></TextField>
                <TextField sx={formItem} name='title' variant='outlined' label='Title' fullWidth value={lolGroupData.title} onChange={(e) => setLolGroupData({ ...lolGroupData, title: e.target.value })}></TextField>
                <TextField sx={formItem} name='description' variant='outlined' label='Description' fullWidth value={lolGroupData.description} onChange={(e) => setLolGroupData({ ...lolGroupData, description: e.target.value })} multiline rows={4}></TextField>
                
                <FormControl sx={formItem} fullWidth>
                    <InputLabel id="gameMode">Game Mode</InputLabel>
                    <Select labelId="gameMode" value={lolGroupData.gameMode} label="GameMode" onChange={(e) => setLolGroupData({ ...lolGroupData, gameMode: e.target.value })}>
                        <MenuItem value={'Blind Pick'}>Blind Pick</MenuItem>
                        <MenuItem value={'Draft Pick'}>Draft Pick</MenuItem>
                        <MenuItem value={'Ranked Duo'}>Ranked Duo</MenuItem>
                        <MenuItem value={'Ranked Flex'}>Ranked Flex</MenuItem>
                        <MenuItem value={'Aram'}>Aram</MenuItem>
                        <MenuItem value={'TFT'}>TFT</MenuItem>
                        <MenuItem value={'TFT: Ranked'}>TFT: Ranked</MenuItem>
                        <MenuItem value={'TFT: Hyper Roll'}>TFT: Hyper Roll</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={formItem} fullWidth>
                    <InputLabel id="tier">Tier</InputLabel>
                    <Select labelId="tier" value={lolGroupData.tier} label="Tier" onChange={(e) => setLolGroupData({ ...lolGroupData, tier: e.target.value })}>
                        <MenuItem value={'Iron'}>Iron</MenuItem>
                        <MenuItem value={'Bronze'}>Bronze</MenuItem>
                        <MenuItem value={'Silver'}>Silver</MenuItem>
                        <MenuItem value={'Gold'}>Gold</MenuItem>
                        <MenuItem value={'Platinum'}>Platinum</MenuItem>
                        <MenuItem value={'Diamond'}>Diamond</MenuItem>
                        <MenuItem value={'Master'}>Master</MenuItem>
                        <MenuItem value={'Grandmaster'}>Grandmaster</MenuItem>
                        <MenuItem value={'Challenger'}>Challenger</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={formItem} fullWidth>
                    <InputLabel id="division">Division</InputLabel>
                    <Select labelId="division" value={lolGroupData.division} label="Division" onChange={(e) => setLolGroupData({ ...lolGroupData, division: e.target.value })}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={formItem} fullWidth>
                    <InputLabel id="region">Region</InputLabel>
                    <Select labelId="region" value={lolGroupData.region} label="Region" onChange={(e) => setLolGroupData({ ...lolGroupData, region: e.target.value })}>
                        <MenuItem value={'Brazil'}>Brazil</MenuItem>
                        <MenuItem value={'EU West'}>EU West</MenuItem>
                        <MenuItem value={'EU Nordic & East'}>EU Nordic & East</MenuItem>
                        <MenuItem value={'Japan'}>Japan</MenuItem>
                        <MenuItem value={'Latin America North'}>Latin America North</MenuItem>
                        <MenuItem value={'Latin America South'}>Latin America South</MenuItem>
                        <MenuItem value={'North America'}>North America</MenuItem>
                        <MenuItem value={'Oceania'}>Oceania</MenuItem>
                        <MenuItem value={'Russia'}>Russia</MenuItem>
                        <MenuItem value={'Turkey'}>Turkey</MenuItem>
                    </Select>
                </FormControl>

                <TextField sx={formItem}  name='datePicker' variant='outlined' label='Date Picker' fullWidth value={lolGroupData.willPlayOnDate} onChange={(e) => setLolGroupData({ ...lolGroupData, willPlayOnDate: e.target.value })} type='date'  InputLabelProps={{
            shrink: true}}></TextField>

                <TextField sx={formItem}  name='timePicker' variant='outlined' label='Time Picker' fullWidth value={lolGroupData.willPlayOnTime} onChange={(e) => setLolGroupData({ ...lolGroupData, willPlayOnTime: e.target.value })} type='time' InputLabelProps={{
            shrink: true}}></TextField>

            <Button sx={buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>

            <Button sx={{backgroundColor: '#A13434'}} variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default LolForm;