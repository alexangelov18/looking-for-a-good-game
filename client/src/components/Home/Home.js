import React, { useState } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getLolGroupsBySearch } from '../../actions/lolGroups';

import LolGroups from "../../components/LolGroups/LolGroups";
import LolForm from "../../components/Form/LolForm";
import SideBar from "../../components/SideBar/SideBar";
import Pagination  from "../Pagination";
import { pagination, appBarSearch, formItem, searchButton } from "./styles";

function useQuery() {
    return new URLSearchParams(document.location.search);
}

const Home = () => {

    const[currentId, setCurrentId] = useState(0);
    const dispatch =  useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [gameMode, setGameMode] = useState('');
    const [tier, setTier] = useState('');

    const searchLolGroup = () => {
        if(search.trim() || gameMode || tier){
            dispatch(getLolGroupsBySearch({ search, gameMode, tier }));
            navigate(`/lolGroups/search?searchQuery=${search || 'none'}&gameMode=${gameMode}&tier=${tier}`);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            search();
        }
    };

    const clear = () => {
        setSearch('');
        setGameMode('');
        setTier('');
    };

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
                        <AppBar sx={ appBarSearch } position="static" color="inherit">
                            <TextField name="search" variant="outlined" label="Search Group By Creator" fullWidth value={search} onKeyDown={handleKeyPress}  onChange={(e) => setSearch(e.target.value)}/>
                            <FormControl sx={formItem} fullWidth>
                                <InputLabel id="gameMode">Search By Game Mode</InputLabel>
                                    <Select labelId="gameMode"  label="GameMode" value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
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
                                <InputLabel id="tier">Search By Tier</InputLabel>
                                    <Select labelId="tier" label="Tier" value={tier} onChange={(e) => setTier(e.target.value)}>
                                        <MenuItem value={'Iron'}>Iron</MenuItem>
                                        <MenuItem value={'Bronze'}>Bronze</MenuItem>
                                        <MenuItem value={'Silver'}>Silver</MenuItem>
                                        <MenuItem value={'Gold'}>Gold</MenuItem>
                                        <MenuItem value={'Platinum'}>Platinum</MenuItem>
                                        <MenuItem value={'Emerald'}>Platinum</MenuItem>
                                        <MenuItem value={'Diamond'}>Diamond</MenuItem>
                                        <MenuItem value={'Master'}>Master</MenuItem>
                                        <MenuItem value={'Grandmaster'}>Grandmaster</MenuItem>
                                        <MenuItem value={'Challenger'}>Challenger</MenuItem>
                                    </Select>
                            </FormControl>
                            <Button sx={searchButton} onClick={searchLolGroup} color="primary" variant="contained">Search</Button>
                            <Button sx={searchButton} variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                        </AppBar>
                        <LolForm currentId={currentId} setCurrentId={setCurrentId} />
                        {(!searchQuery && !gameMode && !tier) && (
                        <Paper sx={ pagination } elevation={6}>
                            <Pagination page={page}/>
                        </Paper>
                        )}
                        
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;