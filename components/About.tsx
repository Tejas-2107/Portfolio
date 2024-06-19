import React from 'react'
import Image from 'next/image'
import profilePicture from '../public/profile_picture.png'
const About = () => {
    return (
        <div className='about flex flex-col justify-center items-center h-screen' id='about'>
            <Image src={profilePicture} alt='Profile Picture' className='w-1/5  max-[800px]:w-80' />
            <h3 className='my-8 font-medium w-2/5 text-justify max-[800px]:w-4/5 text-xl'>Hello! I'm Tejas, a graduate who is interested in problem-solving, coding, and web development. I am proficient in programming languages including JavaScript and C++, as well as frontend and backend web development with expertise in ReactJS and NodeJS.</h3>
        </div>
    )
}

export default About
