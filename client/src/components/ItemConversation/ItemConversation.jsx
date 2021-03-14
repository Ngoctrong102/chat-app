import React from 'react';

import './ItemConversation.scss';

const ItemConversation = () => {
    const toggleMenuAction = (e) => {
        e.preventDefault();
        if (e.currentTarget.classList.contains('show')) {
            e.currentTarget.classList.remove('show');
        }
        else {
            var show = document.querySelector('.action-dropdown.show');
            if (show) show.classList.remove('show');
            e.currentTarget.classList.add('show');
        }
    }
    return (
        <li className="item-conversation">
            <div className="avt-conversation">
                <img src="avt-default.jpg" alt="" />
            </div>
            <div className="body-item-conversation new-mess ">
                <div>
                    <h4>Ngọc Trọng 102</h4>
                    <p>Tin nhắn gần nhất sẽ hiện ở đây sasasasasasasa</p>
                </div>
                <div className="item-actions">
                    <small>03:41 PM</small>
                    <div className="action-dropdown" onClick={toggleMenuAction}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                        <div className="action-menu">
                            <button>Profile</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ItemConversation;