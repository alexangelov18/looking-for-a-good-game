import React, { useEffect } from 'react';
import {Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { getLolGroups } from '../actions/lolGroups';

const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.lolGroups )
    const dispatch = useDispatch();

    useEffect(() => {
        if(page) {
            dispatch(getLolGroups(page));
        } 
    }, [ dispatch, page ]);

    return (
        <Pagination
            sx={{ ul: styles}}
            count={numberOfPages}
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/lolGroups?page=${item.page}`}/>
            )}
        /> 
    );
};

export default Paginate;