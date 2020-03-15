import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FetchData } from './pages/FetchData';
import { Counter } from './pages/Counter';
import { Deals } from './pages/Deals';
import { Pizzas } from './pages/Pizzas';

import './custom.css'
import './index.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Deals} />

                <Route exact path='/home' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/pizzas.html' component={Pizzas} />
            </Layout>
        );
    }
}