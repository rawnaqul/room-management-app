import React from 'react'
import Image from 'next/image'
import profileImage from '@/public/images/profilePicture.png'
import bellLogo from '@/public/images/Notification icon.svg'
import Link from 'next/link'
import TaskDetails from '@/app/components/TaskDetails'

const branchSelectionLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className='text-center mt-0 my-0 h-screen bg-red-1000 lg:w-[1480px]  mx-auto w-96 md:w-[1480px]'>
            <div className='pt-6 bg-teal-400 w-96 md:w-2/3 lg:w-full mx-auto rounded-b-[80px] md:rounded-none'>
                <div className='flex flex-row justify-between mx-4 target_class my-0 bg-blue-3000 md:pb-6'>
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1 bg-inherit border-none">
                                <span className='rotate-90 text-white text-xl md:text-3xl'>|||</span>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-teal-100 rounded-box w-52">
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href=''>Item 2</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-row w-2/3 md:w-auto bg-pink-3000  my-auto'>
                        <div className='w-8 md:w-14 mr-auto md:mr-5 ml-6 my-auto'>
                            <Image src={profileImage} alt=''></Image>
                        </div>
                        <div className='text-white ml-auto mr-2 text-right bg-lime-3000'>
                            <h2 className='my-0 md:text-lg'>Moinul Islam</h2>
                            <p className='text-xs my-0 pr-1'>Doctor</p>
                        </div>
                        <div className='bg-slate-100 w-8 h-8 rounded-full ml-autol my-auto'><Image className='m-auto mt-1' src={bellLogo} alt='notification logo'></Image></div>
                    </div>
                </div>
                <div className='text-left mx-4 mt-8 pb-16 md:hidden'>
                    <h1 className='text-white md:text-teal-400'>Hello Doc,</h1>
                    <p className='text-sm font-light md:text-teal-400'>The physician must be able to tell the antecedents, know the present, and foretell the future.</p>
                </div>
            </div>
            <div className='w-96 md:w-1/2 mx-auto bg-orange-2000'>
                <TaskDetails></TaskDetails>
                {children}
            </div>
        </main>
    )
}

export default branchSelectionLayout