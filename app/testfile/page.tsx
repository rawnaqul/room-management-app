'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../components/ReUsableButton'
import imaje from '@/public/images/spd_demo.jpg'

export default function ChecKing() {
    const [action, setAction] = useState<Element | string>();
    const [color, setColor] = useState<Element | string>();

    function handleOnClick(e: string) {
        // console.log(e);
        setAction('click')
        changeBorderColor()
    }
    function handleOnMouseDown(e: string) {
        console.log(e, 'some animation of 800 ms');
        startPressTimer()
        // setAction('some animation of 800 ms')
    }

    // function handleOnTouchStart(e: string) {
    //     console.log(e, 'some animation of 800 ms on mobile');
    //     setAction('some animation of 800 ms on mobile')
    // }

    function startPressTimer() {
        setTimeout(() => {
            console.log('long press hoise bhaa');
            setAction('longpress')
        }, 1500)
    }
    function changeBorderColor() {
        setColor('red')
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={imaje} alt='spidey' className='max-w-sm rounded-lg shadow-2xl'></Image>
                    <div>
                        <h1 className="text-5xl font-bold">Button Click Test!</h1>
                        <p className="py-6">Provident cup quasi. In deleniti a id nisi.</p>



                        <Button className="btn btn-outline m-8"
                            onClick={() => { handleOnClick('empty') }}
                            onMouseDown={() => { handleOnMouseDown('down') }}
                        >Click koro</Button>



                        <hr></hr>
                        <Button className="btn btn-outline btn-primary m-8"
                            onClick={() => { setAction(undefined) }}>Reset</Button>
                    </div>
                    <div>
                        <h1>What you did to the button</h1>
                        <p>
                            {!action && (<><strong>Baal korso</strong></>)}
                            {action === 'click' && (<><strong>Click korso</strong></>)}
                            {action === 'longpress' && (<><strong>Longpress korso</strong><span className="countdown font-mono text-6xl">
                                <span style={{ "--value": 54 } as React.CSSProperties}></span>
                            </span></>)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
