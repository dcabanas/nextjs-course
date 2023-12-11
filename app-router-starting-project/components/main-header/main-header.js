import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from '@/components/main-header/main-header-background'
import NavLink from '@/components/main-header/nav-link'
// import { usePathname } from 'next/navigation'

export default function MainHeader() {

    /*
        Nextjs/react hook that gives the current active route path -> the string after the domain
        since this is a react hook (client-side code) it can't be run on the server

        Ideally we want to use client side components as further down in our tree as possible
        so we can get the advantdge of use more server side components. That's why we gonna extract the Links
        in this component to a separate component so that one is a "use client" and not this one, where more
        children components are being rendered that don't need to be client side components
     */
    // const path = usePathname()

    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    {/*<img src="@/assets/logo.png"/>*/}
                    {/*<img src={logoImg.src} alt="A plate with food on it"/>*/}
                    <Image src={logoImg} alt="A plate with food on it" priority/>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}