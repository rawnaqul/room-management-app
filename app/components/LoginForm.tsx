'use client';
import Link from 'next/link'
import React from 'react'
import Button from './ReUsableButton';
import { useRouter } from 'next/navigation';



const LoginForm = () => {
    const router = useRouter();

    return (
        <div className='w-80 '>
            <div>
                <h2 className='text-2xl font-medium mt-2'>Welcome</h2>
                <h6 className='text-thin'>It&apos;s time to RMS</h6>
            </div>
            <label className="input input-bordered rounded-full flex items-center gap-2 my-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow" onChange={() => { }} placeholder="Email" />
            </label>
            <label className="input input-bordered rounded-full flex items-center gap-2 my-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" onChange={() => { }} value="password" />
            </label>
            <div>
                <div className="form-control flex flex-row">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text mx-4">Remember meh</span>
                    </label>
                    <Link href='/app/components/LoginForm.tsx' className='text-slate-400 label-text text-justif mt-3 ml-auto'>Forgot password?</Link>
                </div>
            </div>
            <Button className="btn btn-accent  text-white rounded-full w-full font light mt-4" onClick={() => router.push('/serviceoptions/profileform')}>Log In</Button>

            <div className='mt-6'>
                <p>
                    Don&apos;t have an account?
                    <span className='ml-4 text-teal-400'>
                        <Link href='/app/components/LoginForm.tsx'>Sign Up Here!</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default LoginForm