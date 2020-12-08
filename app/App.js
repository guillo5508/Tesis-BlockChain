import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Amplify, { Auth } from 'aws-amplify';

// import {NavBar} from './components';
import EmbarkJS from 'Embark/EmbarkJS';
import Blockchain from './components/blockchain';
import { Home} from "./views";
// import {Home} from './components'
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import awsconfig from './aws-exports';

// Amplify.configure(awsconfig);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      activeKey: 'home',
      // whisperEnabled: false,
      // storageEnabled: false,
      blockchainEnabled: false
    };
  }

  componentDidMount() {
    EmbarkJS.onReady((err) => {
      if (err) {
        // If err is not null then it means something went wrong connecting to ethereum
        // you can use this to ask the user to enable metamask for e.g
        return this.setState({error: err.message || err});
      }

      EmbarkJS.Blockchain.isAvailable().then(result => {
        this.setState({blockchainEnabled: result});
      });

    });
  }

  _renderStatus(title, available) {
    let className = available ? 'pull-right status-online' : 'pull-right status-offline';
    return <React.Fragment>
      {title}
      <span className={className}/>
    </React.Fragment>;
  }

  handleSelect(key) {
    this.setState({activeKey: key});
  }

  render() {

    return (
    <div className='div-tabs'>             
     <Tabs
      id="controlled-tab-example"
      activeKey={this.state.activeKey}
      onSelect={(k) => this.setState({activeKey: k})}
    >
      <Tab eventKey="home" title="Inicio">
        <Home/>
      </Tab>
      <Tab eventKey="contract" title="Smart Contract">
        <Blockchain/>
      </Tab>
      {/* <Tab eventKey="contact" title="Contact" disabled>
        hola3
      </Tab> */}
    </Tabs>

    </div>);
  }
}

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>
      
  // </React.StrictMode>
  , 
  document.getElementById('root')
);

