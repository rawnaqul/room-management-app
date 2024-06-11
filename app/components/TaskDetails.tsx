'use client'

import React from 'react'
import { isNumberObject } from 'util/types';

const TaskDetails = ({ children }: any) => {

<<<<<<< HEAD
const TaskDetails = () => {
    const theDate = new Date();
    let myDay = theDate.toDateString();
    const MyCount: number = 1;
=======
>>>>>>> 8199fdae686adc82a9a3931b86d6dded1ea79b94
    return (
        <div>
            <div className='mx-4 bg-slate-100 opacity-80 p-5 rounded-xl mt-6'>
                <div>
                    <div className='flex flex-row justify-between'>
                        <div className='w-16 text-left font-normal text-xl'><h2>Task Finished</h2></div>
                        <div className='w-16 text-right font-normal text-xl text-emerald-500'><h2>{myDay}</h2></div>
                    </div>
                    <div className='mt-8 flex flex-row justify-between'>
                        <div><div className='bg-emerald-500 w-[6px] h-full rounded-md'></div></div>
                        <div>
<<<<<<< HEAD
                            <span className="countdown font-mono text-5xl text-emerald-500  ">
                                <span style={{ "--value": MyCount } as React.CSSProperties}></span>
=======
                            <span className="countdown font-mono text-5xl text-emerald-500">
                                <span style={{ "--value": 55 } as React.CSSProperties}></span>
>>>>>>> 8199fdae686adc82a9a3931b86d6dded1ea79b94
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDetails