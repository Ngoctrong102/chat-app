import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './navigator.scss'

import NavFeature from '../../components/NavFeature/NavFeature';
import Sidebar from '../Sidebar/Sidebar';

const Navigator = ({ feature }) => {
    return (
        <div className="navConversation">
            <NavFeature />
            <Sidebar />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        feature: state.navState.feature
    }
}

export default connect(mapStateToProps, null)(Navigator);