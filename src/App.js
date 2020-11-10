import React, { useEffect } from 'react';
import './css/App.scss';
import AppHeader from './components/AppHeader';
import Home from './pages/Home.js';
import SearchItems from './pages/SearchItems.js';
import PostItems from './pages/PostItems.js';
import AboutUs from './pages/AboutUs.js';
import Contact from './pages/Contact.js';
import Help from './pages/Help.js';
import AppFooter from './components/AppFooter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/search-items">
            <SearchItems />
          </Route>
          <Route path="/post-items">
            <PostItems />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}

