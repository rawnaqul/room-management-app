'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import Button from './ReUsableButton';
export default function ButtonStop() {
    const router = useRouter()
    return (
        <div className='my-6'>
            {/* STOP button here */}
            <div className='my-6'>
                <div className='mt-6 text-[#45BDAA]'>
                    <span className="countdown font-mono text-2xl">
                        <span style={{ "--value": 56 } as React.CSSProperties}></span>:
                        <span style={{ "--value": 45 } as React.CSSProperties}></span>:
                        <span style={{ "--value": 15 } as React.CSSProperties}></span>
                    </span>
                </div>
            </div>
            <div className='mt-6  border-4 border-red-500 rounded-3xl mx-auto content-center bg-slate-100 inline-block'>
                <Button className="btn p-10 m-6 bg-white text-center opacity-70  text-red-500 rounded-3xl  content-center text-2xl drop-shadow-xl font-thin hover:shadow-inner">STOP</Button>
            </div>
            <div className='my-6 text-[#45BDAA]'>
                <p>Start Time: </p>
                <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": 15 } as React.CSSProperties}></span>:
                    <span style={{ "--value": 20 } as React.CSSProperties}></span>:
                    <span style={{ "--value": 35 } as React.CSSProperties}></span>
                </span>
            </div>
        </div>
    )
}
