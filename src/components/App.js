import * as React from 'react';
import '../../src/css/App.css';
import Login from '../features/Login/Login';
import Project from '../features/Project/Project';
import Hardware from '../features/Hardware/Hardware';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/hardware" element={<Hardware />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;