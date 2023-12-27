import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'
import Head from 'next/head'

export default function HomePage(props) {
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta name="description" content="I post about web development"/>
            </Head>
            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </>
    )
}

export function getStaticProps() {

    return {
        props: {
            posts: getFeaturedPosts()
        },
        revalidate: 1800
    }
}