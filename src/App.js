import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { CSSTransition } from 'react-transition-group';

const App = () => {

  const routes = [
    {path: '/', name: 'Home', Component: Home},
    {path: '/about', name: 'About', Component: About},
    {path: '/projects', name: 'Projects', Component: Projects},
    {path: '/contact', name: 'Contact', Component: Contact}
  ]

  return (
    <div className="app">
      <Router>
          <Nav />
              {routes.map(({ path, name, Component }) => {
                return (
                  <Route key={name} path={path} exact>
                    {({ match, location }) => (
                      
                      <CSSTransition
                      in={match != null}
                      timeout={{
                        appear: 2000,
                        enter: 1200,
                        exit: 600,
                      }}
                      classNames='page'
                      unmountOnExit
                      appear
                      >
                        <div className="component">
                          <Component />
                        </div>
                      </CSSTransition>
                      )}
                  </Route>
                )}
              )}
      </Router>
    </div>
  )
}

export default App;