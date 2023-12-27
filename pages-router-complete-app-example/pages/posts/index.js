import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'
import Head from 'next/head'


export default function AllPostsPage(props) {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all related programming tutorials"/>
            </Head>
            <AllPosts posts={props.posts}/>
        </>
    )
}

export function getStaticProps() {

    return {
        props: {
            posts: getAllPosts()
        }
    }
}