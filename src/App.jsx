import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './appLayout/AppLayout';
import Login from './Login';

function App() {
    return (
        <Routes>
            <Route path='/Task5' element={<Login />} />
            <Route path='*' element={<AppLayout/>} />
        </Routes>
    );
}

export default App;
