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
            <Route exact path='/' element={<NewsComponent key="general" pageSize={20}  country="us"  category="general"/>}/>
            <Route exact path='/business' element={<NewsComponent key="business" pageSize={20}  country="us"  category="business"/>}/>
            <Route exact path='/entertainment' element={<NewsComponent key="entertainment" pageSize={20}  country="us"  category="entertainment"/>}/>
            <Route exact path='/general' element={<NewsComponent key="generalcomp" pageSize={20}  country="us"  category="general"/>}/>
            <Route exact path='/health' element={<NewsComponent key="health" pageSize={20}  country="us"  category="health"/>}/>
            <Route exact path='/science' element={<NewsComponent key="science" pageSize={20}  country="us"  category="science"/>}/>
            <Route exact path='/sports' element={<NewsComponent key="sports" pageSize={20}  country="us"  category="sports"/>}/>
            <Route exact path='/technology' element={<NewsComponent key="technology" pageSize={20}  country="us"  category="technology"/>}/>
            </Routes>
        </Router>
        {/* <Navbar />
        <NewsComponent key="general" pageSize={20}  country="us"  category="general"/> */}
      </div>
    )
  }
}