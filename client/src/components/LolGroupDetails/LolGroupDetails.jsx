import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { getLolGroup } from '../../actions/lolGroups';

import CommentSection from './CommentSection';
import { card, section, loadingPaper } from './styles';


const LolGroupDetails = () => {
  const { lolGroup, lolGroups, isLoading} = useSelector((state) => state.lolGroups);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();  

  useEffect(() => {
    dispatch(getLolGroup(id));
  }, [id])

  if(!lolGroup) return null;

  if(isLoading){
    return (
      <Paper elevation={6} sx={loadingPaper}>
        <CircularProgress size='7em'/>
      </Paper>
    );
  }

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div style={card}>
        <div style={section}>
          <Typography variant="h3" component="h2">{lolGroup.title}</Typography>
          <Typography gutterBottom variant="body1" component="p">{lolGroup.description}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography gutterBottom variant="body1" component="p">Game Mode: {lolGroup.gameMode}</Typography>
          <Typography gutterBottom variant="body1" component="p">Region: {lolGroup.region}</Typography>
          <Typography gutterBottom variant="body1" component="p">Tier: {lolGroup.tier}</Typography>
          <Typography gutterBottom variant="body1" component="p">Division: {lolGroup.division}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6">Created by: {lolGroup.name}</Typography>
          <Typography variant="body1">{moment(lolGroup.createdAt).fromNow()}</Typography>
          <Typography variant="body1">Will Play on: {lolGroup.willPlayOnDate}</Typography>
          <Typography variant="body1">Time: {lolGroup.willPlayOnTime}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection lolGroup={lolGroup}/>
          <Divider style={{ margin: '20px 0' }} />
        </div>
      </div>
    </Paper>
  )
}

export default LolGroupDetails