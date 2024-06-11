'use client'
import React, { HtmlHTMLAttributes, InsHTMLAttributes, ReactNode } from 'react'
import Button from './ReUsableButton'
import { useRouter } from 'next/navigation'
import getAllPost from '../lib/getAllPost'
import { GetServerSideProps } from 'next'

type propsType = {
    paraprop: [
        {
            id: number,
            name: string,
            address: {
                city: string
            }
        }
    ]
}
const BranchSelection = (props: propsType) => {
    const router = useRouter();
    console.log(props.paraprop, "component er props check done");

    return (
        <div>
            <div className='mt-8 p-6'>
                <h2 className='mr-auto text-left'>Choose Branch</h2>
                <div>
                    <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-4">
                        {props.paraprop.map(item => <Button key={item.id} className="btn btn-outline btn-accent my-4 rounded-full hover:bg-emerald-500" onClick={() => { router.push('/serviceoptions/servicetype') }}>{item.address.city}</Button>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BranchSelection

