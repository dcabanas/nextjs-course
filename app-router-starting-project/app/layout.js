import './globals.css'
import MainHeader from '@/components/main-header/main-header'

export const metadata = {
    title: 'NextLevel Food',
    description: 'Delicious meals, shared by a food-loving community.'
}


/*
    In order to work layouts need to be named with the reserved word "layout"
 */

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MainHeader/>
                {children}
            </body>
        </html>
    )
}
