import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import ShowIP from './components/ShowIP';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='container'>
        <Card name="Your IPv6 Address">
          <ShowIP type="ipv6" />
        </Card>
        <Card name="Your IPv4 Address">
          <ShowIP/>
        </Card>
      </div>
    </div>
  )
}

export default App;
