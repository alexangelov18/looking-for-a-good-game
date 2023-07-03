import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'; 
import lolLogo from '../../../images/lolLogo.png';
import { useDispatch } from 'react-redux';

import { deleteLolGroup, joinLolGroup } from '../../../actions/lolGroups';
 
import { card, overlay, media, cardActions, right } from './styles';

const LolGroup = ({ lolGroup, setCurrentId }) => {

    const dispatch = useDispatch();

    return (
        <Card sx={card}> 
            <div style={media}>
                <div style={overlay}>
                    <Typography variant='h5' component="h5" style={{wordWrap: 'break-word'}}>{lolGroup.title}</Typography>  
                    <Typography variant='h6' component="h6" style={{wordWrap: 'break-word'}}>{lolGroup.creator}</Typography>
                    <Typography variant='body2'>{moment(lolGroup.createdAt).fromNow()}</Typography>
                </div>
                <div style={right}>
                    <div>
                        <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(lolGroup._id)}>
                            <MoreHorizIcon fontSize='default'/>
                        </Button>
                    </div>
                    <div>
                        <img src={lolLogo} alt="lolLogo" style={{height: '50px', marginLeft: '0px'}}/>
                    </div>
                </div> 
            </div>
            
            <CardContent>
                <Typography variant='body1' component="p" style={{wordWrap: 'break-word'}}>{lolGroup.description}</Typography>
            </CardContent>
            
            <CardActions sx={cardActions}>
                <Button  style={{backgroundColor:'#A13434', color:'white'}} size='small' onClick={()=>dispatch(joinLolGroup(lolGroup._id))}><PersonAddAlt1Icon/>&nbsp; Join &nbsp; {lolGroup.peopleCount}</Button>
                <Button  style={{backgroundColor:'#A13434', color:'white'}} size='small' onClick={()=>dispatch(deleteLolGroup(lolGroup._id))}><DeleteIcon/> &nbsp; Delete </Button>
            </CardActions>
        </Card>
    );
}

export default LolGroup;