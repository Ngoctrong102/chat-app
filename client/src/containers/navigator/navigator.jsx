import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './navigator.scss'

import NavFeature from '../../components/NavFeature/NavFeature';
import ChatSidebar from '../../components/ChatSidebar/ChatSidebar';
import FriendSidebar from '../../components/FriendSidebar/FriendSidebar';

const Navigator = ({ feature }) => {
    const renderFeatureTag = feature => {
        switch (feature) {
            case "Chat": {
                return <ChatSidebar />
            }
            case "Friend": {
                return <FriendSidebar />
            }
            default: {
                return <div>Chưa hỗ trợ tính năng này</div>
            }
        }
    }
    return (
        <div className="navConversation">
            <NavFeature />
            {renderFeatureTag(feature)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        feature: state.navState.feature
    }
}

export default connect(mapStateToProps, null)(Navigator);