import React from 'react';

import './MessageBox.scss';

const MessageBox = ({ content, isMyMess }) => {
  return (
    <div className={isMyMess ? "message-box me" : "message-box"} >
      <div className="avt">
        <img src="avt-default.jpg" alt="" />
      </div>
      <div className="message-content">
        {content}
      </div>
      <div className="time">
        <small>Thứ 5 tháng 12, 19:20</small>
      </div>
    </div >
  )
}


export default MessageBox;