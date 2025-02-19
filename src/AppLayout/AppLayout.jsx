import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
// import Login from './pages/Login'
import Academics from '../pages/Academics'
import Sports from '../pages/sports'
import Exams from '../pages/Exams'
import Achievements from '../pages/Achievements'
// import { Sidebar } from 'lucide-react'
import Sidebar from '../components/Sidebar'
// import { User } from 'lucide-react'

function AppLayout() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
       <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-0'/>
       <div className='absolute inset-0 '/>
      </div>
      <Sidebar />
      <Routes>
       <Route path="/Dashboard/Academics" element={<Academics />} />
       <Route path="/Dashboard/Exams" element={<Exams/>} />
       <Route path="/Dashboard/Achievements" element={<Achievements />} />
       <Route path="/Dashboard/sports" element={<Sports />} />
        <Route path="/" element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default AppLayout;