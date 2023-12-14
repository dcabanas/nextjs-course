import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'

function HomePage(props) {
    const {products} = props

    return (
        <ul>
            {products.map(product =>
                <Link key={product.id} href={`/${product.id}`}>
                    <li>
                        {product.title}
                    </li>
                </Link>
            )}
        </ul>
    )
}

// Static Generation
export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    if (!data) {
        return { redirect: { destination: '/no-data' } }
    }

    if (data.products.length === 0) {
        return {notFound: true}
    }

    return {
        props: {
            products: data.products
        },
        // ISR (Incremental) only in production
        revalidate: 10, //(s)
        //notFound: true
        //redirect: { destination: '/no-data' }
    }
}

export default HomePage;
