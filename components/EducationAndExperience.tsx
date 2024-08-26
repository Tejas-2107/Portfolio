import React from 'react'

const EducationAndExperience = () => {
    return (
        <div className='education w-4/5 mx-auto mt-24'>
            <h1 className='text-center text-6xl font-bold my-10 mb-16'>Education and Experience</h1>
            <div className='experience my-8'>
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> Software Enginner Intern, Qualys Pune</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn p-2">
                        Collaborated on the QFlow Dashboard using Next.js and ExpressJS, enhancing features and functionality. Implemented cron jobs for workflow management, added version display with sorting using react-table, and fixed frontend bugs. Maintained detailed API documentation with Swagger and optimized Elasticsearch queries for efficient data retrieval
                        <br />
                        <span className='font-bold'>Skills:  </span>
                        Next.js · TypeScript · Node.js · Elasticsearch · Swagger API · Express.js
                    </p>
                </details>
            </div>
            <div className='experience'>
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> Bachelor of Technology in Information Technology</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        I completed my Bachelor of Technology in Information Technology from Pune University, where I studied subjects such as Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems (OS), Networking, and Data Structures and Algorithms. My final year project was a Depression Detection System using deep learning and machine learning techniques.
                    </p>
                </details>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
        </div>
    )
}

export default EducationAndExperience
