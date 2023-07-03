import React from "react";
import { Container} from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {

    return (
        <BrowserRouter>
            <Container maxWidth="auto">
                    <Navbar/>
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/auth" exact element={<Auth/>}/>
                    </Routes>
                    
            </Container>
        </BrowserRouter>
                
    );
}

export default App;