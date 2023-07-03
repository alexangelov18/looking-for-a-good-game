import { Button } from "@mui/material";
import {centeredButtons, buttons} from "./styles";
import lolLogo from '../../images/lolLogo.png';
import wowLogo from '../../images/wowLogo.png';
import csgoLogo from '../../images/csgoLogo.png';
import ffxivLogo from '../../images/ffxivLogo.png';
import dota2Logo from '../../images/dota2Logo.png';
import gtaVLogo from '../../images/gtaVLogo.png';
import homeLogo from '../../images/homeLogo.png';
import addMoreLogo from '../../images/addMoreLogo.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div style={centeredButtons}>
                <Button component={Link} to="/" sx={buttons}>
                <img src={homeLogo} alt="homeLogo" style={{height: '50px', marginLeft: '0px'}}/>   
                </Button>

                <Button sx={buttons}>
                <img src={lolLogo} alt="lolLogo" style={{height: '50px', marginLeft: '4px'}}/>     
                </Button>

                <Button sx={buttons}>
                <img src={wowLogo} alt="wowLogo" style={{height: '100px', marginLeft: '4px'}}/>     
                </Button>

                <Button sx={buttons}>
                <img src={csgoLogo} alt="csgoLogo" style={{height: '100px', marginLeft: '6px'}}/>     
                </Button>

                <Button sx={buttons}>
                <img src={ffxivLogo} alt="ffxivLogo" style={{height: '50px', marginLeft: '0px'}}/>     
                </Button>

                <Button sx={buttons}>
                <img src={dota2Logo} alt="dota2Logo" style={{height: '40px', marginLeft: '0px'}}/>     
                </Button>

                <Button sx={buttons}>
                <img src={gtaVLogo} alt="gtaVLogo" style={{height: '45px', marginLeft: '3px'}}/>     
                </Button>

                <Button sx={buttons}>
                <img src={addMoreLogo} alt="addMoreLogo" style={{height: '50px', marginLeft: '0px'}}/>     
                </Button> 
        </div>
     );
}

export default SideBar;