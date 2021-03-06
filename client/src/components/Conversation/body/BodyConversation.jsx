import React, { useEffect, useRef, useState } from 'react';

import MessageBox from './MessageBox/MessageBox';

import './BodyConversation.scss';

let messagesInit = [];

const BodyConversation = ({ }) => {
    const bodyConversation = useRef(null);
    var [messages, setMessages] = useState(messagesInit);
    useEffect(() => {
        bodyConversation.current.scrollTop = bodyConversation.current.scrollHeight;
    }, [])

    var MessageBoxs = messages.map((m) => <MessageBox content={m.content} isMyMess={m.isMyMess} />);

    return (
        <div className="body-conversation" ref={bodyConversation}>
            {MessageBoxs}
        </div>
    )
}


export default BodyConversation;