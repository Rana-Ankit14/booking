import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import {Login} from './components/Login'
import {Register} from './components/Register'
import {PageNotFound} from "./components/PageNotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/","/login"]} component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/404" component={PageNotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default App;
