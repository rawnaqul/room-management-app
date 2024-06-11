'use client'
import React, { useState, useRef } from 'react'
import Button from './ReUsableButton'
import { useRouter } from 'next/navigation'
import { setInterval } from 'timers';


const color = ['red', 'green', 'yellow'];
const unused = ['bg-red-400', 'bg-green-400', 'bg-yellow-400', 'border-red-400', 'border-green-400', 'border-yellow-400']

const SelectRoom = () => {
    const router = useRouter();
    const [color, setColor] = useState('green');
    const [seconds, setSeconds] = useState(Number);
    const [leSwitch, setLeSwitch] = useState('string');
    const [minutes, setMinutes] = useState(Number);


    // START button functionality=======
    function handleOnMouseDown(e: string) {
        console.log('la la land');
        setSeconds(Date.now())
        setTimeout(() => {
            const timeX = Date.now()
            const diff = timeX - seconds;
            console.log(diff);

            if (diff >= 1200) {
                setTimeout(() => {
                    setColor('yellow')
                }, 100);
            }
        }, 500);
        finalColor(color)
    }
    function finalColor(rong: string) {
        if (rong === 'yellow') {
            setColor('red')
            console.log(color, "line 39, finalColor");
        }
    }
    function handleOnMouseUp() {
        longPressKi()
        if (color != 'green') {
            setTimeout(() => {
                setColor('green')
            }, 1500);
        }
    }

    function longPressKi() {
        const endTimeStamp = Date.now()
        const diff = endTimeStamp - seconds
        if (diff > 800) {
            setLeSwitch('longpress')
            console.log(leSwitch);
            handleLongPress()
        } else {
            alert('press and hold')
        }
    }

    function handleLongPress() {
        if (leSwitch === 'longpress') {
            console.log(leSwitch, 'ki problem');
            // router.push('/serviceoptions/stopoperation')
            countMinutes()
        }
    }

    function countMinutes() {
        if (leSwitch === 'longpress') {
            setInterval(() => {
                setMinutes(minutes + 1)
                console.log(minutes, "koy second?");
            }, 5000);

        }
    }

    return (
        <div>

            <div className='mt-8 p-6'>
                <div className='flex flex-row'>
                    <h2 className='text-left text-xl content-center'>Select Room</h2>
                    {/* <span className="loading loading-infinity loading-lg mr-auto opacity-20 ml-3"></span> */}
                </div>
                <div>
                    <div className="join flex flex-col">
                        <input className="btn btn-outline btn-accent my-4 rounded-full hover:bg-emerald-500" type="radio" name="options" aria-label="OPD 1" />
                        <input className=" btn btn-outline btn-accent my-4 rounded-full rounded-l-full" type="radio" name="options" aria-label="OPD 2" />
                        <input className=" btn btn-outline btn-accent my-4 rounded-full" type="radio" name="options" aria-label="OPD 3" />
                        <input className=" btn btn-outline btn-accent my-4 rounded-full" type="radio" name="options" aria-label="OPD 4" />
                    </div>
                    {/* START button here */}
                    <div className={`mt-6  border-4 border-${color}-400 rounded-3xl mx-auto content-center bg-slate-100 inline-block transition duration-1000 ease-in-out`}>
                        <Button className={`px-10 py-6 m-6 bg-${color}-400 text-center  text-white rounded-3xl  content-center text-2xl drop-shadow-xl font-thin transition duration-1000 ease-in-out`}
                            onClick={() => { }}
                            onMouseDown={() => { handleOnMouseDown('??') }}
                            onMouseUp={() => { handleOnMouseUp() }}
                        >START</Button>
                    </div>
                    <div>
                        <span className="countdown font-mono text-6xl my-4">
                            <span style={{ "--value": minutes } as React.CSSProperties}></span>
                        </span>
                    </div>
                    <div className='my-6'>
                        <Button className='btn btn-outline border-[#45BDAA] text-[#45BDAA]'>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectRoom