import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SongOutlineCards from '../SongOutlineCard/SongOutlineCards'

const UserHome = () => {
    return (
        <>
            <SongOutlineCards/>
           
        </>
    );
}

export default connect(mapStoreToProps)(UserHome);
