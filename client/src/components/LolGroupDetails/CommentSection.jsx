import React, { useState, useRef} from 'react';
import {Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { commentLolGroup } from '../../actions/lolGroups';

import { commentsOuterContainer, commentsInnerContainer } from './styles';
const CommentSection = ({ lolGroup }) => {
    
    const [comments, setComments] = useState(lolGroup?.comments);
    const [comment, setComment] = useState('')
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const commentsRef = useRef()

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentLolGroup(finalComment, lolGroup._id));
        
        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth'});
    };
console.log(lolGroup.comments)
    return (
       <div>
            <div style={commentsOuterContainer}>
                <div style={commentsInnerContainer}>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    {comments?.map((c, i) => (
                        <Typography key={i} gutterBottom variant='subtitle1'>
                           <strong>{c.split(': ')[0]}</strong>
                           {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width: '70%'}}>
                        <Typography gutterBottom variant='h6'>Write a Comment</Typography>
                        <TextField
                            fullWidth
                            rows={4}
                            variant='outlined'
                            label='Comment'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button sx={ {"&.Mui-disabled": {background: 'gray', color: 'white'}, backgroundColor: '#A13434'}} style={{ marginTop: '10px', disabled: '#A13434' }} fullWidth disabled={!comment} variant='contained' onClick={handleClick}>
                            Comment
                        </Button>
                </div>
                )}
            </div>
       </div>
    );
};

export default CommentSection;