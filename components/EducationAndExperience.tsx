import React from 'react'

const EducationAndExperience = () => {
    return (
        <div className='education w-4/5 mx-auto mt-24'>
            <h1 className='text-center text-6xl font-bold my-10'>Education and Experience</h1>
            <div className='experience mt-20'>
                <details className='text-lg'>
                    <summary className='text-lg'>Software Engineer Intern - Qualys, Pune</summary>
                    <p className='text-sm'>Working on Qflow Dashboard</p>
                </details>
            </div>
            <div className='experience'>
                <details className='text-lg'>
                    <summary className='text-lg'>B.Tech - Information Technology</summary>
                    <p className='text-sm'>Working on Qflow Dashboard</p>
                </details>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
        </div>
    )
}

export default EducationAndExperience
