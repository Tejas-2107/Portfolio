import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='footer my-16 flex flex-col gap-y-6' id="connect">
      <h2 className='text-3xl text-center'>Tejas Chougale</h2>
      <div className="contact flex items-center justify-center gap-x-5 max-[800px]:flex-col gap-y-3">
        <MdOutlineEmail size={30}/>
        <p>tejaschougale2107@gmail.com</p>
        <LuPhone size={30}/>
        <p>+91 8421912954</p>
      </div>
      <div className="links flex justify-center gap-x-10">
      <Link href='https://www.github.com/Tejas-2107'><FaGithub size={30}/></Link>
      <Link href='https://www.linkedin.com/in/tejas-chougale-82430a202/'><CiLinkedin size={30}/></Link>
      <Link href='https://www.instagram.com/tejas_2107__/'><FaInstagram size={30}/></Link>
      </div>
    </div>
  )
}

export default Footer
