/*
    layout.js and page.js are nextjs reserved filenames

    this component is a server componente, runs in the server and
    sends the JSX to the client

    more routes can be added via file-routing system: we create folders
    inside the app folder and each sub-folder gets its page.js file
 */
import Link from 'next/link'
import Header from '@/components/header'

export default function Home() {
    return (
        <main>
            <Header/>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href="about">About Us</Link></p>
        </main>
    )
}
