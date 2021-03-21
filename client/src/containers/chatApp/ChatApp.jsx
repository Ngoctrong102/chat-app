

import { createContext, useEffect } from 'react';
import { connect } from 'react-redux';

import Navigator from '../navigator/navigator'
import Conversation from '../conversation/conversation';
import FormPopUp from '../FormPopUp/FormPopUp';
import { addNewMessage, firstMessage } from '../../store/actions/conversations'

let SocketContext = createContext();

const ChatApp = ({ popUp, socket, addNewMessage, firstMessage }) => {
  useEffect(() => {
    socket.on('NEW_MESSAGE', ({ conversationID, message }) => {
      // console.log(data)
      addNewMessage(conversationID, message);
    })
    socket.on('FIRST_MESSAGE', ({ oldID, conversation }) => {
      // console.log(data)
      firstMessage(oldID, conversation);
    })
    return () => socket.disconnect();
  }, [])
  return (
    <SocketContext.Provider value={socket}>
      <div className="app">
        {popUp && <FormPopUp />}
        <Navigator />
        <Conversation />
      </div>
    </SocketContext.Provider>
  )
}

function mapStateToProps(state) {
  return {
    popUp: state.navState.popUp
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addNewMessage: (conversationID, message) => dispatch(addNewMessage(conversationID, message)),
    firstMessage: (oldID, conversation) => dispatch(firstMessage(oldID, conversation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
export { SocketContext };