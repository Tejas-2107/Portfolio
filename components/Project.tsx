import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fundImage from '../public/fund.jpg'
import youtubeImgae from '../public/Youtube.png'
import netflixImage from '../public/netflix.png'
import { FaSquareGithub } from "react-icons/fa6";

const Project = () => {
    return (
        <div className='project w-4/5 mx-auto mt-20' id='projects'>
            <h1 className='text-center text-6xl font-bold mb-20'>Projects</h1>
            <div id='skills' className='grid grid-col-3 justify-center items-center text-center mx-auto  max-[1000px]:grid-cols-1 gap-y-4 w-full'>
                <div className='flex items-center border-solid border-2 border-gray-300 rounded-md p-3 max-[1000px]:flex-col'>
                    <div className='project_image w-3/5'>
                        <Image src={fundImage} alt='fund allocation' className='w-40' />
                    </div>
                    <div className="description">
                        <h2 className='text-2xl font-bold mb-3'>Fund Allocation System</h2>
                        <p className='text-left ml-2'>Developed a comprehensive system enabling users to apply for project funds. The user interface was built using ReactJS.The backend was efficiently managed with Node.js and Express to handle API calls, ensuring seamless communication between the client and server. Mongoose was utilized to connect the application with MongoDB, providing robust data storage and retrieval capabilities. An admin panel was included to allow administrators to allocate funds based on the submitted project ideas, ensuring a streamlined and efficient fund distribution process.
                        </p>
                        <div className='github flex justify-center mt-2'>
                            <Link href="https://github.com/Tejas-2107/Fund_Allocation_Client"><FaSquareGithub size={30} color='gray' /></Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center border-solid border-2 border-gray-300 rounded-md p-3 max-[1000px]:flex-col'>
                    <div className='project_image w-3/5'>
                        <Image src={youtubeImgae} alt='youtube image' className='w-40' color='gray' />
                    </div>
                    <div className="description">
                        <h2 className='text-2xl font-bold mb-3'>YouTube Clone</h2>
                        <p className='text-left ml-2'>Developed a YouTube clone leveraging Google OAuth 2.0, YouTube API, ReactJS, and Tailwind CSS. The application integrates secure and seamless user authentication using Google OAuth 2.0. Additionally, it features a search bar, enabling users to easily search for and access videos from the YouTube API. This project showcases proficiency in modern web development technologies and API integration.. Key features include secure user authentication, video search functionality, and an intuitive user interface.This YouTube clone demonstrates the capability to integrate multiple APIs.
                        </p>
                        <div className='github flex justify-center mt-2'>
                            <Link href="https://github.com/Tejas-2107/youtube-frontend" ><FaSquareGithub size={30} color='gray'/></Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center border-solid border-2 border-gray-300 rounded-md p-3 max-[1000px]:flex-col'>
                    <div className='project_image w-3/5'>
                        <Image src={netflixImage} alt='netflix image' className='w-40' />
                    </div>
                    <div className="description">
                        <h2 className='text-2xl font-bold mb-3'>Netflix Admin Dashboard</h2>
                        <p className='text-left ml-2'>Developed a comprehensive system enabling users to apply for project funds. The user interface was built using ReactJS.The backend was efficiently managed with Node.js and Express to handle API calls, ensuring seamless communication between the client and server. Mongoose was utilized to connect the application with MongoDB, providing robust data storage and retrieval capabilities. An admin panel was included to allow administrators to allocate funds based on the submitted project ideas, ensuring a streamlined and efficient fund distribution process.
                        </p>
                        <div className='github flex justify-center mt-2'>
                            <Link href="https://github.com/Tejas-2107/Netflix-Clone" ><FaSquareGithub size={30} color='gray' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Project
