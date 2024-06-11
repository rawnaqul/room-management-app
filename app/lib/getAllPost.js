export default async function getAllPost() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users?_limit=4');
    return result.json();
}