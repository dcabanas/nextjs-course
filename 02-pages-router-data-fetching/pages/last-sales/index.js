import { useEffect, useState } from 'react'
import useSWR from 'swr'

/*
    Even though there's client-side code in this component/page
    Nextjs by default always pre-generates the static content
    of the pages, and after that hydrates it with React
 */
export default function LastSalesPage(props) {
    /*const [sales, setSales] = useState(null)
    const [isLoading, setIsLoading] = useState(true)*/

    const {data, error} = useSWR(
        'request-url',
        (url) => fetch(url)
        .then(res => res.json())
        .then(data => {
            const transformedSales = []
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                })
            }

            return transformedSales
        }))

    /*useEffect(() => {
        setIsLoading(true)
        fetch('url'
        )
        .then(response => response.json())
        .then(data => {
            const transformedSales = []
            for (const key in data) {
                transformedSales.push({id: key, username: data[key].username, volume: data[key].volume})
            }

            setSales(transformedSales)
            setIsLoading(false)
        })

    }, [])*/

    /*if (isLoading) {
        return <p>Loading...</p>
    }*/

    if (error) {
        return <p>Failed to load</p>
    }

    if (!data) {
        return <p>Loading...</p>
    }


    return (
        <ul>
            {data.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
        </ul>
    )
}

export async function getStaticProps() {
    return fetch('url')
    .then(res => res.json())
    .then(data => {
        const transformedSales = []
        for (const key in data) {
            transformedSales.push({
                id: key,
                username: data[key].username,
                volume: data[key].volume
            })
        }

        return {
            props: {
                sales: transformedSales,
                revalidate: 10
            }
        }
    })
}