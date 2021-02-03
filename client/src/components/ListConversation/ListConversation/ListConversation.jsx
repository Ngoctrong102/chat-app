import React from 'react';

import './ListConversation.scss';

import ItemConversation from '../ItemConversation/ItemConversation';

const ListConversation = ({ conversations }) => {
    const itemsConversation = conversations.map((conversation, index) => {
        return <ItemConversation key={index} title={conversation.title} />
    })
    return (
        <div className="sidebar-body">
            <ul>
                {itemsConversation}
            </ul>
        </div>
    )
}



export default ListConversation;