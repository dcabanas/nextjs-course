/*
    this component is not going to be picked up by Nextjs Router (if it was inside the app folder)
    the app router needs to find a page.js inside our folder and/or subfolders

    to be more clear and keep a nice project structure we can set our components
    and other non-routing related stuff outside the main "app" folder
 */
export default function Header() {
    return (
        <>
            <img src="/logo.png" alt="A server surrounded by magic sparkles."/>
            <h1>Welcome to this NextJS Course!</h1>
        </>
    )
}