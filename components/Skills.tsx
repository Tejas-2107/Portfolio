import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='grid grid-cols-4 place-items-center justify-items-center w-4/5 mx-auto'>
            <div className='frontend_skills border-solid border-2 border-sky-500'>
                <h1 className='text-4xl font-bold'>Frontend</h1>
                <ul className='gap-y-3'>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Tailwind-CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                </ul>
            </div>
            <div className='backend_skills border-solid border-2 border-sky-500 bg-orange-300'>
                <h1 className='text-4xl font-bold'>Backend</h1>
                <ul className='gap-y-3'>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB-CSS</li>
                    <li>SQL</li>
                    <li>Elasticsearch</li>
                </ul>
            </div>
            <div className='cloud_skills'>
                <h1 className='text-4xl font-bold'>Cloud</h1>
                <ul>
                    <li>IAM</li>
                    <li>AWS Lambda</li>
                    <li>S3</li>
                </ul>
            </div>
            <div className='version_skills h-auto'>
                <h1 className='text-4xl font-bold'>Version Control</h1>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>BitBucket</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
