import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListClientComponent from './components/ListClientComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateClientComponent from './components/CreateClientComponent';
import ViewClientComponent from './components/ViewClientComponent';
import UpdateClientComponent from './components/UpdateClientComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListClientComponent}></Route>
                          <Route path = "/Clients" component = {ListClientComponent}></Route>
                          <Route path = "/add-Client" component = {CreateClientComponent}></Route>
                          <Route path = "/view-Client/:id" component = {ViewClientComponent}></Route>

                          <Route path = "/update-Client/:id" component = {UpdateClientComponent}></Route> 
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
