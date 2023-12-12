import { useRouter } from 'next/router'

export default function SearchEventsPage() {
    const router = useRouter()
    console.log(router.query)

    return (
        <h1>The Search Events Page</h1>
    )
}