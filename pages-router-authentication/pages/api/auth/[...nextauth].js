import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { connectToDatabase } from '../../../lib/db'
import { verifyPassword } from '../../../lib/auth'


/*
    This file with the "catch all routes slug" will handle
    all the routes that NextAuth exposes under /api/auth/.

    We could have also used this for the signup route
 */


/*
    This is the handler function that NextAuth will execute
    for the current api route
 */
export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        // Using this Provider means we are going to bring our own credentials
        // And not a custom provider with everything set up (like Google, Facebook etc)
        Providers.Credentials({
            // credentials: {} if we use this option NextAuth generates a Sign Up/Sign In form

            // this function is executed everytime NextAuth
            // receives a login request
            async authorize(credentials, req) {
                const client = await connectToDatabase()
                const db = client.db()

                const existingUser = await db.collection('users').findOne({email: credentials.email})
                if (!existingUser) {
                    await client.close()
                    /*
                        Everytime an exception is thrown NextAuth rejects
                        this Promise and redirects to a specific page.

                        We can change this behaviour and show the error in the
                        current page (see auth-form.js submitHandler() funtion)
                     */
                    throw new Error('No user found!')
                }

                const isValid = await verifyPassword(credentials.password, existingUser.password)
                if (!isValid) {
                    await client.close()
                    throw new Error('Could not log you in!')
                }

                await client.close()
                /*
                    By returning an object we are telling NextAuth that
                    the operation succeded and this object will be
                    encoded as a JWT
                 */
                return {email: existingUser.email}
            }
        })
    ]
})