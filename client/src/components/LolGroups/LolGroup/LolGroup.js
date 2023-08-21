import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, ButtonBase } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'; 
import lolLogo from '../../../images/lolLogo.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteLolGroup, joinLolGroup } from '../../../actions/lolGroups';
 
import { card, overlay, media, cardActions, right, cardAction } from './styles';

const LolGroup = ({ lolGroup, setCurrentId }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    const PeopleJoined = () => {
        if (lolGroup.peopleCount.length > 0) {
          return lolGroup.peopleCount.find((peopleJoined) => peopleJoined === (user?.result?.googleId || user?.result?._id))
            ? (
              <><PersonAddAlt1Icon fontSize="small" />&nbsp;{lolGroup.peopleCount.length > 2 ? `You and ${lolGroup.peopleCount.length - 1} others` : `${lolGroup.peopleCount.length} joined` }</>
            ) : (
              <><PersonAddAlt1Icon fontSize="small" />&nbsp;{lolGroup.peopleCount.length} {lolGroup.peopleCount.length === 1 ? 'Join' : 'Joined'}</>
            );
        }
    
        return <><PersonAddAlt1Icon fontSize="small" />&nbsp;Join</>;
      };

      const openLolGroup = () => navigate(`/lolGroups/${lolGroup._id}`);
      
    return (
        <Card sx={card}> 
       
            <div style={media}> <ButtonBase sx={cardAction} onClick={openLolGroup}>
                <div style={overlay}>
                    <Typography variant='h5' component="h5" style={{wordWrap: 'break-word'}}>{lolGroup.title}</Typography>  
                    <Typography variant='h6' component="h6" style={{wordWrap: 'break-word'}}>{lolGroup.name}</Typography>
                    <Typography variant='body2'>{moment(lolGroup.createdAt).fromNow()}</Typography>
                </div></ButtonBase>
                <div style={right}>
                {(user?.result?.googleId === lolGroup?.creator || user?.result?._id === lolGroup?.creator) && (
                    <div>
                        <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(lolGroup._id)}>
                            <MoreHorizIcon fontSize='default'/>
                        </Button>
                    </div>
                )}
                    <div>
                        <img src={lolLogo} alt="lolLogo" style={{height: '50px', marginLeft: '0px'}}/>
                    </div>
                </div> 
            </div>
            
            <CardContent>
                <Typography variant='body1' component="p" style={{wordWrap: 'break-word'}}>{lolGroup.description}</Typography>
            </CardContent>
        

            <CardActions sx={cardActions}>
                <Button  style={{backgroundColor:'#A13434', color:'white'}} disabled={!user?.result} size='small' onClick={()=>dispatch(joinLolGroup(lolGroup._id))}>
                    <PeopleJoined/>
                </Button>
                {(user?.result?.googleId === lolGroup?.creator || user?.result?._id === lolGroup?.creator) && (
                    <Button  style={{backgroundColor:'#A13434', color:'white'}} size='small' onClick={()=>dispatch(deleteLolGroup(lolGroup._id))}>
                    <DeleteIcon/> &nbsp; Delete 
                </Button>
                )}
            </CardActions>   
        </Card>
    );
}

export default LolGroup;