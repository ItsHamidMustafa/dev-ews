import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Navbar/>
          <Routes>
            <Route exact path='/'><NewsComponent key="general" pageSize={20}  country="us"  category="general"/></Route>
            <Route exact path='/business'><NewsComponent key="business" pageSize={20}  country="us"  category="business"/></Route>
            <Route exact path='/entertainment'><NewsComponent key="entertainment" pageSize={20}  country="us"  category="entertainment"/></Route>
            <Route exact path='/general'><NewsComponent key="general" pageSize={20}  country="us"  category="general"/></Route>
            <Route exact path='/health'><NewsComponent key="health" pageSize={20}  country="us"  category="health"/></Route>
            <Route exact path='/science'><NewsComponent key="science" pageSize={20}  country="us"  category="science"/></Route>
            <Route exact path='/sports'><NewsComponent key="sports" pageSize={20}  country="us"  category="sports"/></Route>
            <Route exact path='/technology'><NewsComponent key="technology" pageSize={20}  country="us"  category="technology"/></Route>
            </Routes>
        </Router>
        <Navbar />
        <NewsComponent key="general" pageSize={20}  country="us"  category="general"/>
      </div>
    )
  }
}