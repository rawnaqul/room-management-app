'use client';
import Link from 'next/link';
import Image from 'next/image';
import profileImage from '@/public/images/profilePicture.png'
import React from 'react'
import Button from './ReUsableButton';
import { useRouter } from 'next/navigation';


const UserProfileForm = () => {
    const router = useRouter();
    return (
        <div className='w-80 mb-10'>
            <div>
                <h2 className='text-2xl font-medium mt-2'>Complete your profile</h2>
                <Image src={profileImage} alt='a man' className='mx-auto mt-4'></Image>
            </div>
            <label className="input input-bordered rounded-full flex items-center gap-2 my-6">

                <input type="text" className="grow" onChange={() => { }} placeholder="Full Name" />
            </label>
            <select className="select select-bordered rounded-full w-full max-w-xs text-slate-400 my-2">
                <option disabled selected>Date of birth</option>
                <option>30th Feb</option>
                <option>31st April</option>
            </select>
            <select className="select select-bordered rounded-full w-full max-w-xs text-slate-400 my-2">
                <option disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <select className="select select-bordered rounded-full w-full max-w-xs text-slate-400 my-2">
                <option disabled selected>Designation</option>
                <option>Doctor</option>
                <option>Nurse</option>
            </select>

            <Button type='button' className="btn bg-[#45BDAA] text-white rounded-full w-full mt-6 " onClick={() => router.push('/serviceoptions/branchselection')}>Confirm</Button>

        </div>
    )
}

export default UserProfileForm