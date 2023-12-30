import Layout from '../components/layout/layout'
import { Provider } from 'next-auth/client'

import '../styles/globals.css'

/*
    These pageProps are the props returned by getStaticProps()
    and getServerSideProps().

    pageProps.session is the session returned in profile.js
 */
export default function MyApp({ Component, pageProps }) {
    /*
        By using this Provider Component approach allows the useSession()
        hook to skip the extra cookie validation step, because pageProps.session
        will have a validated session object.

        The cases where no session is being returned by getStatic or getServerSide,
        undefined, useSession() will do its thing and send the cookie to an endpoint
        to do the required validations
     */
    return (
        <Provider session={pageProps.session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
