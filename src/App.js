import React from 'react';
import './App.css';
import { Content } from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Read } from './components/Read';
import { Create } from './components/Create';


class App extends React.Component {
  render() {
    return (
       //All the components are loaded underneath navBar
      <Router>
        <div className="App"> 
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">MyApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/read' component={Read} exact></Route>        
            <Route path='/create' component={Create} exact></Route>
          </Switch>
        </div>
      </Router>
      //When we go to home its calling the component content
      //When we go to read its calling the component read
      //When we go to create its calling the component create
    );
  }
}

export default App;
