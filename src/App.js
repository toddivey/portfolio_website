import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Resume from './components/Resume'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar/>
        <div className="App-body">
          <Switch>
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
