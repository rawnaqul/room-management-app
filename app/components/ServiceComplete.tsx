'use client'
import React from 'react'

const ServiceComplete = () => {
    return (
        <div className='bg-emerald-50 rounded-2xl p-4'>
            <div className='my-5'>
                <p>Sevice completed!</p>
                <p className='text-emerald-700 opacity-50'>Total Time: <span className="countdown font-mono text-2xl">
                    <span style={{}}></span>:
                    <span style={{}}></span>:
                    <span style={{}}></span>
                </span></p>
            </div>
            <div className='flex flex-row bg-yellow-3000 justify-center'>
                <div className='border-2 py-3 px-3'>
                    <p>Start Time!</p>
                    <p className='text-emerald-600 opacity-50'>Total Time: <span className="countdown font-mono text-2xl">
                        <span style={{}}></span>:
                        <span style={{}}></span>:
                        <span style={{}}></span>
                    </span></p>
                </div>
                <div className='border-2 py-3 px-3 border-l-0'>
                    <p>End Time!</p>
                    <p className='text-emerald-600 opacity-50'>Total Time: <span className="countdown font-mono text-2xl">
                        <span style={{}}></span>:
                        <span style={{}}></span>:
                        <span style={{}}></span>
                    </span></p>
                </div>
            </div>
            <div className='mt-6 '>
                <h2 className='pl-2'>Remarks</h2>
                <select className="select select-bordered rounded-full w-full max-w-xs text-slate-400 my-2">
                    <option disabled selected>Remarks</option>
                    <option>Bhalo</option>
                    <option>Khoob Bhalo</option>
                </select>
                <button className='bg-emerald-500 mt-4 opacity-60 rounded-full text-white py-3 w-4/5 mx-auto'>Continue</button>
            </div>
        </div>
    )
}

export default ServiceComplete