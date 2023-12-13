import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Box from './box'; 
import GroupMembersList from './GroupMembersList';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greeting/> */}
     {/* <Box/> */}
     <GroupMembersList/>
    </div>
  );
}

export default App;
