import React from 'react'

const Skills = () => {
    return (
        <div>
            <h1 className='text-center text-6xl font-bold my-10'>Skills</h1>
            <div id='skills' className='grid grid-cols-4 justify-center gap-x-5 items-center text-center w-4/5 mx-auto  max-[1000px]:grid-cols-1 gap-y-5'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-100 dark:border-gray-700 h-80">
                    <h5 className="mb-4 text-4xl font-bold text-black">Frontend</h5>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex items-center">
                            <span className="text-base font-medium leading-tight  ms-3">HTML</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight ms-3">CSS3</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight  ms-3">JavaScript</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tigh ms-3">TypeScript</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight ms-3">ReactJS</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight ms-3">NextJS</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full max-w-sm p-4 bg-gray-800 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 h-80">
                    <h5 className="mb-4 text-4xl font-medium text-white">Backend</h5>

                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex items-center">
                            <span className="text-base font-medium leading-tight text-white  ms-3">NodeJS</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-white  ms-3">ExpressJS</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-white ms-3">MongoDB</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-white ms-3">SQL</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-white ms-3">Elasticsearch</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-100 dark:border-gray-700 h-80">
                    <h5 className="mb-4 text-4xl font-bold text-black">Cloud</h5>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex items-center">
                            <span className="text-base font-medium leading-tight text-black ms-3">IAM</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-black ms-3">AWS Lambda</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-black ms-3">S3</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full max-w-sm p-4 bg-gray-800 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 h-80">
                    <h5 className="mb-4 text-4xl font-bold text-white">Version Control</h5>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex items-center">
                            <span className="text-base font-medium leading-tight text-white ms-3">Git</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-white ms-3">GitHub</span>
                        </li>
                        <li className="flex">
                            <span className="text-base font-medium leading-tight text-white ms-3">BitBucket</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
