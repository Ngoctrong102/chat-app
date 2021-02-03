import React from 'react';

import './FormConversation.scss';

const FormConversation = ({ }) => {
    return (
        <div className="form-conversation">
            <form action="">
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></button>
                <input type="text" placeholder="Nhập tin nhắn ..." />
            </form>
        </div>
    )
}

export default FormConversation;