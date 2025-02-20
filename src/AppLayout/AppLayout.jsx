import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Academics from '../pages/Academics'
import Sports from '../pages/Sports'
import Exams from '../pages/Exams'
import Achievements from '../pages/Achievements'
import Sidebar from '../components/Sidebar'


function AppLayout() {
  return (
    <>
    
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
       <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-0'/>
       <div className='absolute inset-0 '/>
      </div>
      
      <Sidebar />
      <Routes>
       
       <Route path="/academics" element={<Academics />} />
       <Route path="/exams" element={<Exams/>} />
       <Route path="/achievements" element={<Achievements />} />
       <Route path="/sports" element={<Sports />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
    </>
  )
}

export default AppLayout;