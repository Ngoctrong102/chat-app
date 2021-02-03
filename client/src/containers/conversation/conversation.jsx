import React, { useEffect } from 'react';

import './conversation.scss'

import HeaderConversation from '../../components/Conversation/header/HeaderConversation';
import BodyConversation from '../../components/Conversation/body/BodyConversation';
import FormConversation from '../../components/Conversation/form/FormConversation';
const NavCon = ({ }) => {
    return (
        <div className="conversation">
            <HeaderConversation />
            <BodyConversation />
            <FormConversation />
        </div>
    )
}

export default NavCon;