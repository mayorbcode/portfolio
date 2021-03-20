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
  
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="app" onClick={(event) => {
      if (navOpen) {
        if (!navRef.current.contains(event.target)) {
          setNavOpen(false);
        }
      }
    }}>
      <Router>
          <Nav ref={navRef} open={navOpen} onOpenChanged={setNavOpen} />
              {routes.map(({ path, name, Component }) => {
                return (
                  <Route key={name} path={path} exact>
                    {({ match }) => (
                      
                      <CSSTransition
                      in={match != null}
                      timeout={{
                        appear: 1200,
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
