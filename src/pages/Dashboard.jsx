import React from 'react'
import profile from '../assets/profile-default.png'
import { Clock3,BriefcaseBusiness,ChartPie,CalendarDays,LogOut } from 'lucide-react'
const Dashboard = () => {
  return (
    <div className='grid grid-cols-3 gap-x-8 gap-y-0  mt-4 ml-3'>
    <div className='w-96 h-80 bg-gray-950 text-white flex flex-col items-center gap-3 py-4 mt-4 ml-3 rounded-lg'>
  <div className='flex items-center gap-6'>
    <img src={profile} alt='Profile' className='w-28 h-28 rounded-lg' />
    <div className='flex flex-col gap-y-3'>
      <h3 className='uppercase text-sm sm:text-lg text-white'>HEMANTH SV</h3>
      <h2 className='text-md'>7376242AL132</h2>
      <h1 className='font-medium'>SEMESTER - I</h1>
      <h1 className='text-yellow-400 font-medium tracking-widest'>Continuing...</h1>
    </div>
  </div>
  <div className='text-center'>
    <h2>B.Tech- ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</h2>
    <h2>Mentor: BALAMURUGAN E (AM11058)</h2>
    <h2>Special Lab: Not Assigned</h2>
    <h2>Warden: Dr. SELVAKUMAR K</h2>
  </div>
</div>
<div className='w-96 h-80 bg-gray-950 text-white flex flex-col  mt-4 ml-4 rounded-lg '>
  <h2 className='text-lg font-semibold mb-1 pl-4 '>Attendance  Overview</h2>
  <div className='grid-cols-2 grid-rows-3 grid'>
  <h2 className='text-white font-extrabold pl-4 mt-4'><Clock3 />Total Days<br/>80</h2>
  <h2 className='text-white font-extrabold pl-4 mt-4'><BriefcaseBusiness />On Duty<br/>1</h2>
  <h2 className='text-white font-extrabold pl-4 mt-4'><ChartPie />Percentage<br/>100%</h2>
  <h2 className='text-white font-extrabold pl-4 mt-4'><CalendarDays />Present Days<br/>80</h2>
  <h2 className='text-white font-extrabold pl-5 mt-4'><LogOut />leave<br/>0</h2>
  </div>
</div>
<div className='w-96 h-80 bg-gray-950 text-white flex flex-col  mt-4 ml-3 rounded-lg'>
  <h3 className='text-lg font-semibold mb-1 ml-7'>Semester Grade Point Average (SGPA) </h3>
  <h2 className='grid grid-cols-1 grid-rows-6 ml-7 mt-6 '>5<br/><br/> 4 <br/><br/> 3 <br/><br/> 2 <br/><br/> 1 <br/><br/> 0</h2>
</div>

<div className=' w-80 h-28  bg-white flex flex-col items-center text-black rounded-xl ml-7'>
  <h2 className='font-bold text-md mt-5'>Cumulative Grade Point Average (CGPA)</h2>
  <h1 className='font-semibold text-2xl tracking-wide dark:text-gray-500 mt-5 mr-3'>9.8 CGPA</h1>
</div>

<div className='w-80 h-28 bg-white flex flex-col  text-black rounded-xl ml-7'>
  <h2 className='font-bold text-lg ml-4 mt-4'>Arrear Count</h2>
  <h1 className='font-extrabold text-3xl ml-5 mt-4'>0</h1>
</div>
<div className='w-80 h-28 bg-white flex flex-col  text-black rounded-xl ml-7'>
  <h2 className='font-bold text-lg ml-4 mt-4'>Placement FA %</h2>
  <h1 className='font-extrabold text-3xl ml-5 mt-4'>0</h1>
</div>
<div className='w-80 h-28 bg-white flex flex-col  text-black rounded-xl ml-7'>
  <h2 className='font-bold text-lg ml-4 mt-4'>Full-Stack Rank</h2>
  <h1 className='font-extrabold text-3xl ml-6 mt-0'>_</h1>
</div>
<div className='w-80 h-28 bg-white flex flex-col  text-black rounded-xl ml-7'>
  <h2 className='font-bold text-lg ml-4 mt-4'>PS-Grouping</h2>
  <h1 className='font-extrabold text-3xl ml-5 mt-4'>0</h1>
</div>
<div className='w-80 h-28 bg-white flex flex-col  text-black rounded-xl ml-7'>
  <h2 className='font-bold text-lg ml-4 mt-4'>PS-Rank</h2>
  <h1 className='font-extrabold text-3xl ml-5 mt-4'>0</h1>
</div>
</div>
  )
}

export default Dashboard;
