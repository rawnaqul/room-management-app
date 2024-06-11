import Image from 'next/image';
import logo from '@/public/images/logo_squres.svg';
import LoginForm from '@/app/components/LoginForm';
import squareDesign from '@/public/images/squareX3.svg'
import RmsIntro from './components/RmsIntro';


export default function Home() {
  console.log('kisu ekta hoise');

  return (
    <main className='text-center mt-0 mx-auto h-screen flex flex-row w-96 md:w-[1200px] lg:[1800px] bg-lime-4000'>
      <div className='hidden md:block w-96 m-10 mt-00 h-fulll bg-[#0D3D4B]'>
        <RmsIntro />
      </div>
      <div className='flex flex-col mx-auto bg-pink-3000 relative'>
        <div className='h-[113px]'>
          <Image src={squareDesign} className='ml-auto opacity-25 md:absolute md:-right-40 md:top-0' alt='square design'></Image>
        </div>
        <div className='flex flex-row mt-8 justify-center items-end'>
          <Image src={logo} alt='' className='opacity-75' />
          <h1 className='text-teal-5000 text-4xl font-semibold mx-2'>RMS</h1>
        </div>

        <div className='mt-10 mx-auto'>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
