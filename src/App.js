import React from 'react';
import Header from './components/Header';
import Members from './components/Members'
import MemberList from './components/MemberList'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Members />
        <MemberList />
    </div>
  );
}

export default App;
