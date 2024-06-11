import Image from 'next/image'
import React from 'react'
import logoWhite from '@/public/images/logo-white.svg'
import Button from './ReUsableButton'

const RmsIntro = () => {
    return (
        <div className='bg-[#0D3D4B] ml-auto text-white h-4/55'>
            <div className='flex flex-row mt-20 p-6 bg-pink-4000'>
                <Image src={logoWhite} alt='logo white color'></Image>
                <h3 className='text-4xl'>RMS</h3>
            </div>
            <div className='my-4 p-6 bg-red-3000'>
                <h2 className='text-4xl my-4 text-left'>Start your journey with us</h2>
                <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry-s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            </div>
<<<<<<< HEAD
            <div className=' flex flex-row justify-between px-6 bg-green-3000'>
                <Button className='px-4 py-1 bg-emerald-400 rounded-full'>Next</Button>
                <Button className='px-4 py-1 bg-yellow-400 rounded-full text-emerald-800'>Next</Button>
=======
            <div className='mt-40 flex flex-row justify-between px-6'>
                <Button className='px-4 py-1 bg-emerald-400 rounded-full'>Next</Button>
                <Button className='px-4 py-1 bg-yellow-400 rounded-full text-emerald-800'>Skip</Button>
>>>>>>> 8199fdae686adc82a9a3931b86d6dded1ea79b94
            </div>
        </div>
    )
}

export default RmsIntro