import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SongCards from '../SongCards/SongCards'

const UserHome = () => {
    return (
        <>
            <SongCards/>
        </>
    );
}

export default connect(mapStoreToProps)(UserHome);
