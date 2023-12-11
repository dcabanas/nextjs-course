'use client'
/*
    error.js is another reserved filename that handles errors
    to any sibling page + sub-folders
    error.js receives an error prop passed down by Nextjs

    error.js files must be client side to ensure that Nextjs
    catches error on the server and client side
 */
export default  function Error({error}) {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Failed to fetch meal data. Please try again later.</p>
        </main>
    )
}