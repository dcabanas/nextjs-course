import Link from 'next/link'

/*
    post-1 and post-2 are the routes that are going to be injected
    in the slug (another reserved word) in the file structure
    to create dynamic routes
 */
export default function BlogPage() {
    return (
        <main>
            <h1>The Blog</h1>
            <p><Link href="blog/post-1">Post 1</Link></p>
            <p><Link href="blog/post-2">Post 2</Link></p>
        </main>
    )
}