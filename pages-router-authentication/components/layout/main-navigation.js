import Link from 'next/link'
import { useSession, signOut } from 'next-auth/client'

import classes from './main-navigation.module.css'

function MainNavigation() {
    const [session, loading] = useSession()

    function logoutHandler() {
        /*
            This function returns a promise that we can await
            the result telling us the result of the operarion.

            In this case we don't care about that result because
            since we are also using the useSession(), once the signout
            is completed the session cookie will be automatically deleted
            by NextAuth and the component will update
         */
        signOut()
    }


    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>Next Auth</div>
            </Link>
            <nav>
                <ul>
                    {!session && !loading &&
                        <li>
                            <Link href="/auth">Login</Link>
                        </li>
                    }
                    {session &&
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                    }
                    {session &&
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
