import PostContent from '../../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../../lib/posts-util'
import Head from 'next/head'

export default function PostDetailPage(props) {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt}/>
            </Head>
            <PostContent post={props.post}/>
        </>
    )
}

export function getStaticProps(context) {
    const {params: {slug}} = context

    return {
        props: {
            post: getPostData(slug)
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles()
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({
            params: {slug}
        })),
        fallback: false
    }
}