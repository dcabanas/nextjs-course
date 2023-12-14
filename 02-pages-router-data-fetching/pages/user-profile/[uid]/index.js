export default function UserIdPage(props) {
    return (
        <h1>{props.id}</h1>
    )
}

/*
    Even though is a Dynamic Page, since this runs
    on every request there's no need for getStaticProps() + getStaticPaths()
 */
export async function getServerSideProps(context) {
    const {params} = context
    const userId = params.uid

    return {
        props: {
            id: 'userid-' + userId
        }
    }
}