import * as React from 'react';
import { useState } from 'react';
import '../../src/css/App.css';
import Login from '../features/Login/Login';
import Project from '../features/Project/Project';
import Hardware from '../features/Hardware/Hardware';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState();

  if (!isSignedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login setIsSignedIn={setIsSignedIn} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project" element={<Project setIsSignedIn={setIsSignedIn}/>} />
        <Route path="/hardware" element={<Hardware setIsSignedIn={setIsSignedIn}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;