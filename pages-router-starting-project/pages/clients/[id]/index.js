import { useRouter } from 'next/router'

export default function ClientProjectsPage() {
    const router = useRouter()

    function loadProjectHandler() {
        // router.push('/clients/max/projecta')
        // router.replace('/clients/max/projecta')
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid: 'projecta'}
        })
    }

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}