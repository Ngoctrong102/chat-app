

import { createContext, useEffect } from 'react';
import { connect } from 'react-redux';

import Navigator from '../navigator/navigator'
import Conversation from '../conversation/conversation';
import FormPopUp from '../FormPopUp/FormPopUp';

let SocketContext = createContext();

const ChatApp = ({ popUp, socket }) => {
  useEffect(() => {
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
export { SocketContext };