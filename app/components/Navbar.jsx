import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

// import Amplify from 'aws-amplify';
// import { AmplifyAuthenticator, AmplifySignOut, AmplifySignInButton, AmplifySignIn, } from '@aws-amplify/ui-react';
// import { AuthState, onAuthUIStateChange,  } from '@aws-amplify/ui-components';
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);

const NavBar = () => {

//   const [authState, setAuthState] = React.useState();
//   const [user, setUser] = React.useState();

//   React.useEffect(() => {
//       return onAuthUIStateChange((nextAuthState, authData) => {
//           setAuthState(nextAuthState);
//           setUser(authData)
//       });
//   }, []);

//   console.log(authState)
//   console.log(AuthState.SignedIn)
//   console.log(user)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link href="/login">Log In</Nav.Link>
        {
        //   authState === AuthState.SignedIn && user ? (
        //     <NavDropdown title={user.username} id="collasible-nav-dropdown">
        //       <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
        //       <NavDropdown.Divider />
        //       <NavDropdown.Item href="#action/3.4"><AmplifySignOut /></NavDropdown.Item>
        //     </NavDropdown>
        //   ) : (
        //     <Nav.Link href="/login">Log In</Nav.Link>
        //     // <AmplifySignIn />
        //   )
        }
        {/* <Nav.Link eventKey={2} href="#memes">
          {
            authState === AuthState.SignedIn && user ? (
              <div className="App">
                  <div>Hello, {user.username}</div>
                  <AmplifySignOut />
              </div>
            ) : (
              <AmplifyAuthenticator />
            )
          }
        </Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
  
}


export default NavBar;