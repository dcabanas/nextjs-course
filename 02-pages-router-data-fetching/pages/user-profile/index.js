export default function UserProfilePage(props) {
    return (
        <h1>{props.username}</h1>
    )
}

/*
    Not static pre-generated
    Runs on every request and server side only after deployment
 */
export async function getServerSideProps(context) {
    const {params, req, res} = context

    return {
        props: {
            username: 'Max'
        }
    }
}