import React from 'react';
import Link from 'next/link'

const Navbar = () => {
   
  return (
    <div className='navbar flex justify-center py-6 sticky'>
      <div className="navbar_contain w-4/5 flex justify-between items-center">
        <div className='navbar_left mx-20'>
          <h2>Tejas</h2>
        </div>
        <div className="navbar_right w-2/5 flex justify-around items-center">
          <Link href='#' className= ''>Home</Link>
          <Link href='#' className=''>Projects</Link>
          <Link href='#skills' className=' '>Skills</Link>
          <Link href='#' className=''>Connect with me</Link>
          <button>Dark Mode</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
