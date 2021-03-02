import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageProvider from './store/PageContext';

const App = () => {

  return (
    <div className="app">
      <Router>
        <PageProvider>
          <Nav />
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/about' render={() => <About />} />
            <Route path='/projects' render={() => <Projects />} />
            <Route path='/contact' render={() => <Contact />} />
          </Switch>
        </PageProvider>
      </Router>
    </div>
  )
}

export default App;