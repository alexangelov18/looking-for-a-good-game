import React from "react";
import { Container} from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import LolGroupDetails from "./components/LolGroupDetails/LolGroupDetails";

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    
    return (
        <GoogleOAuthProvider clientId='25153612862-9kitvrm7339olg7nebbf55r8js1ddi4k.apps.googleusercontent.com'>
            <BrowserRouter>
            <Container maxWidth="auto">
                    <Navbar/>
                    <Routes>
                        <Route path="/" exact element={<Navigate to='/lolGroups'/>}/>
                        <Route path="/lolGroups" exact element={<Home/>}/>
                        <Route path="/lolGroups/search" exact element={<Home/>}/>
                        <Route path="/lolGroups/:id" exact element={<LolGroupDetails/>}/>
                        <Route path="/auth" exact element={!user ? <Auth/> : <Navigate to='/lolGroups'/>}/>
                    </Routes>
                    
            </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>
        
                
    );
}

export default App;