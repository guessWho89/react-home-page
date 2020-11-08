import React, { useEffect } from 'react';
import './css/App.css';
import AppHeader from './components/AppHeader';
import AppSection1 from './components/AppSection1';
import AppSection2 from './components/AppSection2';
import AppSection3 from './components/AppSection3';
import AppSection4 from './components/AppSection4';
import AppFooter from './components/AppFooter';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
        <AppHeader />
        <AppSection1 />
        <AppSection2 />
        <AppSection3 />
        <AppSection4 />
        <AppFooter />
    </div>
  );
}

