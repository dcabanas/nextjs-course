import ProfileForm from './profile-form'
import classes from './user-profile.module.css'
import { useSession, getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'

function UserProfile() {
    const [isLoading, setIsLoading] = useState(true)
    //const [loadedSession, setLoadedSession] = useState(undefined)

    useEffect(() => {
        getSession().then(session => {
            // if the session is null means no user is logged in, or an object otherwise
            //setLoadedSession(session)

            if (!session) {
                window.location.href = '/auth'
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    // Redirect away if NOT auth
    // const [session, loading] = useSession() kinda buggy thats why the workaround with useState and useEffect was needed

    if (isLoading) {
        return <p className={classes.profile}>Loading...</p>
    }

    async function changePasswordHandler(passwordData) {
        const response = await fetch('/api/user/change-password', {
            method: 'PATCH',
            body: JSON.stringify(passwordData)
        })

        const data = await response.json()
    }

    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm onChangePassword={changePasswordHandler}/>
        </section>
    )
}

export default UserProfile
