import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='navbar flex justify-center py-6 sticky top-0 bg-slate-50 max-[1140px]:hidden'>
      <div className="navbar_contain w-4/5 flex justify-between items-center">
        <div className='navbar_left mx-20'>
          <h2 className='text-lg font-bold max-[1140px]:hidden'>Tejas</h2>
        </div>
        <div className="navbar_right w-2/5 flex justify-around items-center" id="navbar-default" >
          <Link href='#' className='text-lg'>Home</Link>
          <Link href='#projects' className='text-lg'>Projects</Link>
          <Link href='#skills' className='text-lg'>Skills</Link>
          <Link href='#connect' className='text-lg'>Connect with me</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
