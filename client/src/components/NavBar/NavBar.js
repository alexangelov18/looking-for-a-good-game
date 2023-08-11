import React, {useState, useEffect} from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import lfgg from '../../images/LFGG.png';
import { Link } from 'react-router-dom';
import {appBar, heading, image, toolbar, profile, avatar, userName} from './styles';
import { useDispatch } from "react-redux";
import { useNavigate, useLocation} from 'react-router-dom'; 
import decode from 'jwt-decode';

const NavBar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const user = null;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
    <AppBar sx={appBar} position="static" color="inherit">
        <div>
            <img component={Link} to="/" sx={image} src={lfgg} alt="lfgg" height="60" />
            <Typography sx={heading} variant="h2" align="center">LFGG</Typography>
        </div>
        <Toolbar sx={toolbar}>
            {user ? (
                <div sx={profile}>
                    <Avatar sx={avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography sx={userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (       
                    <Button component={Link} to="/auth" variant="contained" color="secondary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
)};



export default NavBar;