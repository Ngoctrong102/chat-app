import React from 'react';

import './ItemReqFriend.scss';

const ItemReqFriend = ({ reqFriend }) => {
  return (
    <li className="item-add-friend">
      <div className="avt">
        <img src={"http://localhost:8888/uploads/" + reqFriend.avatar} alt="" />
      </div>
      <div className="body">
        <div>
          <h4>{reqFriend.username}</h4>
        </div>
      </div>
      <button className="accept">
        <i class="fas fa-check"></i>
      </button>
      <button className="refuse">
        <i class="fas fa-times"></i>
      </button>
    </li>
  )
}

export default ItemReqFriend;