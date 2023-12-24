import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'

export default function HomePage(props) {
    return (
        <>
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