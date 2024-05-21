'use client'
import React from 'react'
import Button from './ReUsableButton'
import { useRouter } from 'next/navigation'

const SelectRoom = () => {
    const router = useRouter();
    return (
        <div>

            <div className='mt-8 p-6'>
                <div className='flex flex-row'>
                    <h2 className='text-left text-xl content-center'>Select Room</h2>
                    <span className="loading loading-infinity loading-lg mr-auto opacity-20 ml-3"></span>
                </div>
                <div>
                    <div className="join flex flex-col">
                        <input className="btn btn-outline btn-accent my-4 rounded-full hover:bg-emerald-500" type="radio" name="options" aria-label="OPD 1" />
                        <input className=" btn btn-outline btn-accent my-4 rounded-full rounded-l-full" type="radio" name="options" aria-label="OPD 2" />
                        <input className=" btn btn-outline btn-accent my-4 rounded-full" type="radio" name="options" aria-label="OPD 3" />
                        <input className=" btn btn-outline btn-accent my-4 rounded-full" type="radio" name="options" aria-label="OPD 4" />
                    </div>
                    {/* START button here */}
                    <div className='mt-6  border-4 border-[#45BDAA] rounded-3xl mx-auto content-center bg-slate-100 inline-block'>
                        <Button className="btn p-10 m-6 bg-[#45BDAA] text-center opacity-70  text-white rounded-3xl  content-center text-2xl drop-shadow-xl font-thin hover:bg-[#45BDAA] hover:shadow-inner" onClick={() => { router.push('/serviceoptions/stopoperation') }}>START</Button>
                    </div>
                    <div className='my-6'>
                        <Button className='btn btn-outline border-[#45BDAA] text-[#45BDAA]'>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectRoom