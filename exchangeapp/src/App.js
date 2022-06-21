import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Mainpage from './pages/Mainpage/Mainpage.component';

const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Mainpage />} />
    </Routes>
  );
}

export default App;
