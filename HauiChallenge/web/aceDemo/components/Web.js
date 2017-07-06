import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Router, Route, hashHistory } from 'react-router';

import Layout from './layout/Layout';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Problems from './pages/Problems';
import Problem from './pages/Problem';
import Contact from './pages/Contact';
import Rank from './pages/Rank';

render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <Route path="/posts" component={Posts}/>
                <Route path="/problems" component={Problems}/>
                <Route path="/problems/:id" component={Problem}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/rank" component={Rank}/>
                <Route path="/home" component={Home}/>
            </Route>
        </Router>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);