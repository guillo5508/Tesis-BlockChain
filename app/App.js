import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from "./components";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // error: null,
      // activeKey: '1',
      // whisperEnabled: false,
      // storageEnabled: false,
      // blockchainEnabled: false
    };
  }


  render() {

    return (
    <>
      <Navbar/>
      <h3>Embark - Usage Example</h3>

    </>);
  }
}

ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  , 
  document.getElementById('root')
);
