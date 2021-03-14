import React from 'react';

import './BodyFriendSideBar.scss';

import { connect } from 'react-redux';
import ItemReqFriend from '../ItemReqFriend/ItemReqFriend';

const BodyFriendSideBar = ({ reqFriends }) => {
  const itemsReqFriends = reqFriends.map((req, index) => {
    return <ItemReqFriend reqFriend={req.from} key={index} />
  })
  var toggleList = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle('hidden')
  }
  return (
    <div className="friend-sidebar-body">
      <div className="header" onClick={toggleList}>
        <h4>Request Friend</h4>
      </div>
      <ul className="req-friend-list">
        {itemsReqFriends}
      </ul>
      <div className="header" onClick={toggleList}>
        <h4>Your Friend</h4>
      </div>
      <ul className="your-friend-list">
        {itemsReqFriends}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reqFriends: state.userState.reqFriends
  };
}

const mapActionToProps = dispatch => {
  return {

  };
}

export default connect(mapStateToProps, mapActionToProps)(BodyFriendSideBar);