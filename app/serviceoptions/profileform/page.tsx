
import React from 'react';
import Image from 'next/image';
import squareDesign from '@/public/images/squareX3.svg';
import logo from '@/public/images/logo_squres.svg';
import UserProfileForm from '../../components/UserProfileForm';

const ProfileForm = () => {
    return (
        <main className='text-center mt-0 w-96 mx-auto mb-6 my-0  h-screen'>
            <div className='flex flex-col mx-auto'>
                <Image src={squareDesign} className='ml-auto opacity-25' alt='square design'></Image>
                <div className='flex flex-row mt-8 justify-center items-end'>
                    <Image src={logo} alt='' className='opacity-75' />
                    <h1 className='text-teal-500 text-4xl font-semibold mx-2'>RMS</h1>
                </div>

                <div className='mt-10 mx-auto'>
                    <UserProfileForm />
                </div>
            </div>
        </main >
    )
}

export default ProfileForm