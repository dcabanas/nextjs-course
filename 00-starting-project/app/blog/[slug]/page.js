/*
    this param object will be passed down by NextJS to dynamic routes
    and its key-value pair will be the (names enclosed with "[]" that
    we define in our folder structure and, the actual dynamic route value on the url)
 */

export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>{params.slug}</p>
        </main>
    )
}