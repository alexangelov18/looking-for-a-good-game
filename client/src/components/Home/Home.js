import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from "react-redux";

import { getLolGroups } from '../../actions/lolGroups';

import LolGroups from "../../components/LolGroups/LolGroups";
import LolForm from "../../components/Form/LolForm";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {

    const[currentId, setCurrentId] = useState(null);

    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(getLolGroups());
    }, [currentId, dispatch]);

    return(
        <Grow in>
            <Container maxWidth="xxl">
                <Grid container justify="space-between" alignItems="stretch" spacing={6}>
                    <Grid item xs={12} sm={3} style={{padding: '2%'}}>
                        <SideBar/>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{padding: '0 2%'}}>
                        <LolGroups setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={3} style={{padding: '2%'}}>
                        <LolForm currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;