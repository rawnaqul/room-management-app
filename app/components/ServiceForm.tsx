'use client'
import React from 'react'
import Button from './ReUsableButton'
import { useRouter } from 'next/navigation'


const ServiceForm = () => {
    const router = useRouter();
    return (
        <div className='w-80 mx-auto'>
            <div>
                <h2 className='text-2xl font-medium mt-2 mb-6'>Select service type</h2>

            </div>
            <select className="select select-bordered rounded-full w-full max-w-xs text-slate-400 my-2">
                <option disabled selected>Category</option>
                <option>Surgery</option>
                <option>Therapy</option>
            </select>
            <select className="select select-bordered rounded-full w-full max-w-xs text-slate-400 my-2">
                <option disabled selected>Service type</option>
                <option>Face Lift</option>
                <option>Eye ball removal</option>
            </select>


            <label className="input input-bordered rounded-full flex items-center gap-2 my-6">

                <input type="number" className="grow" onChange={() => { }} placeholder="Patient ID" />
            </label>
            <Button onClick={() => router.push('/serviceoptions/roomselection')} className='w-full bg-emerald-500 opacity-60 rounded-full text-white py-3'>Next</Button>
            <Button onClick={() => router.push('/serviceoptions/branchselection')} className='w-full bg-slate-300 opacity-60 rounded-full text-white py-3 my-4'>Cancel</Button>
        </div>
    )
}

export default ServiceForm