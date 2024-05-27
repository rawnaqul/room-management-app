'use client'

import React from 'react'
import { isNumberObject } from 'util/types';

const TaskDetails = ({ children }: any) => {

    return (
        <div>
            <div className='mx-4 bg-slate-100 opacity-80 p-5 rounded-xl mt-6'>
                <div>
                    <div className='flex flex-row justify-between'>
                        <div className='w-16 text-left font-normal text-xl'><h2>Task Finished</h2></div>
                        <div className='w-16 text-right font-normal text-xl text-emerald-500'><h2>January 2024</h2></div>
                    </div>
                    <div className='mt-8 flex flex-row justify-between'>
                        <div><div className='bg-emerald-500 w-[6px] h-full rounded-md'></div></div>
                        <div>
                            <span className="countdown font-mono text-5xl text-emerald-500">
                                <span style={{ "--value": 55 } as React.CSSProperties}></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDetails