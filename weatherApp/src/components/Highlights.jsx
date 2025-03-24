import React from 'react'

const Highlights = ({ stats }) => {
    return (
        <div className='bg-[#ebc201] p-2 text-[#191300] felx flex-col justify-start items-center text-tranfrom scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer rounded-lg'>
            <h2 className='text-[22px] text-center mt-2   '>{stats.title}</h2>
            <div className='mt-2'>
                <span className='text-4xl text-center font-bold'>{stats.value}</span>
                <span className='text-2xl text-center'>{stats.unit}</span>
            </div>
            {


                stats.direction ? (
                    <div className='mt-2 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#191300]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                        <div className='ms-2 text-[#191300]'>{stats.direction}</div>
                    </div>) : null
            }
            {
                stats.title == "humidity" ? (
                    <div className="w-full mt-6 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 text-center">
                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${stats.value}%` }}></div>
                    </div>) : null
            }

        </div>
    )
}

export default Highlights
