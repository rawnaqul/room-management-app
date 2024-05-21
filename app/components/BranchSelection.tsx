'use client'
import React from 'react'
import Button from './ReUsableButton'
import { useRouter } from 'next/navigation'

const BranchSelection = () => {
    const router = useRouter();
    return (
        <div>
            <div className='mt-8 p-6'>
                <h2 className='mr-auto text-left'>Choose Branch</h2>
                <div>
                    <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-4">
                        <Button className="btn btn-outline btn-accent my-4 rounded-full hover:bg-emerald-500" onClick={() => { router.push('/serviceoptions/servicetype') }}>Banani</Button>
                        <Button className="btn btn-outline btn-accent my-4 rounded-full hover:bg-emerald-500" onClick={() => { router.push('/serviceoptions/servicetype') }}>Dhanmondi</Button>
                        <Button className="btn btn-outline btn-accent my-4 rounded-full hover:bg-emerald-500" onClick={() => { router.push('/serviceoptions/servicetype') }}>Gulshan</Button>
                        <Button className="btn btn-outline btn-accent my-4 rounded-full hover:bg-emerald-500" onClick={() => { router.push('/serviceoptions/servicetype') }}>Uttara</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BranchSelection