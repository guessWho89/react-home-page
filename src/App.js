import React from 'react';
import './css/App.css';
import AppHeader from './components/AppHeader';
import AppSection1 from './components/AppSection1';
import AppSection2 from './components/AppSection2';
import AppSection3 from './components/AppSection3';
import AppSection4 from './components/AppSection4';
import AppFooter from './components/AppFooter';

export default function App() {
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

