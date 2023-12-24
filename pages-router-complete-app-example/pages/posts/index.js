import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'


export default function AllPostsPage(props) {
    return (
        <AllPosts posts={props.posts}/>
    )
}

export function getStaticProps() {

    return {
        props: {
            posts: getAllPosts()
        }
    }
}