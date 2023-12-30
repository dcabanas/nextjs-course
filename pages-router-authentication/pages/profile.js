import UserProfile from '../components/profile/user-profile'
import { getSession } from 'next-auth/client'

export default function ProfilePage() {
  return <UserProfile/>
}

/*
  We can use this server side Page Guard approach
  or the client side one (user-profile.js). The server-side is slightly better
 */
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}