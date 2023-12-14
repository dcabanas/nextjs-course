import './globals.css'

/*
  metadata is a reserved word in nextjs and is in here
  that we can specify the metadata (<head> tag in html) for the current Layout

  Every nextjs app needs at least on root layout but can have more layouts

  icon.png is actually a reserved filename that originates the favicon
 */
export const metadata = {
    title: 'NextJS Course App',
    description: 'Your first NextJS app!'
}

/*
  children will be the content of the current active page
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
