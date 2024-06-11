import React from 'react'
import BranchSelection from '../../components/BranchSelection'
import { GetServerSideProps } from 'next'

type LocationMockData =
    [
        {
            id: number,
            name: string,
            address: {
                city: string
            }
        }
    ];


export default async function BranchSelectionPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=04');
    const data: LocationMockData = await res.json();
    console.log(data, "data receieved nicely?");

    return (
        <div>

            <BranchSelection paraprop={data}></BranchSelection>
        </div>
    )
}

