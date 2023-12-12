import { useRouter } from 'next/router'

export default function EventDetailPage() {
    const router = useRouter()
    console.log(router.query)

    return (
        <h1>The Event Detail Page</h1>
    )
}