import './App.css';
import Navigator from './containers/navigator/navigator'
import Conversation from './containers/conversation/conversation';
function App() {
  return (
    <div className="app">
      <Navigator />
      <Conversation />
    </div>
  );
}

export default App;
