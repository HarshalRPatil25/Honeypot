import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntryPage from './components/EntryPage';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TokenGenerator from './components/TokenGenerator';
import TokenHistory from './components/TokenHistory';
import TokenDetailHistory from './components/TokenDetailHistory';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EntryPage/>}/>
        <Route exact path="/register" element={<Registration/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/token-generator" element={<TokenGenerator/>}/>
        <Route exact path="/token-history" element={<TokenHistory/>}/>
        <Route exact path="/token-history/token-detail-history" element={<TokenDetailHistory/>}/>
      </Routes>
    </Router>
  )
}

export default App
