import React from 'react';
import LolGroup from './LolGroup/LolGroup';
import { useSelector } from 'react-redux';
import { container } from './styles';
import { Grid, CircularProgress } from '@mui/material';

const LolGroups = ({ setCurrentId }) => {
const  { lolGroups, isLoading }  = useSelector((state) => state.lolGroups);

if(!lolGroups.length && !isLoading) return 'No LoL Groups';

    return (
       isLoading ? <CircularProgress/> : (
        <Grid sx={container} container alignItems='stretch' spacing={3}>
            { lolGroups?.map((lolGroup) => 
            <Grid key={lolGroup._id} item xs={12} sm={12} style={{padding: '0'}}>
                <LolGroup lolGroup={lolGroup} setCurrentId={setCurrentId} />
            </Grid>)}
        </Grid>
       )
    );
}

export default LolGroups;