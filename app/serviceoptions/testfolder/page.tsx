type RepoCountryState =
    [
        {
            id: number,
            name: string,
            address: {
                city: string
            }
        }
    ];

export default async function TestinPage() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=04`);
    const data: RepoCountryState = await res.json();
    console.log(data, "?????");

    return (
        <div className='bg-lime-400'>
            <h1>data koi?</h1>
            <ul className='bg-orange-400'>
                <p>koi???</p>
                <>
                    <div>{data.map(item => <ol key={item.id}>{item.address.city}</ol>)}</div>
                </>
            </ul>

        </div>
    )
}
