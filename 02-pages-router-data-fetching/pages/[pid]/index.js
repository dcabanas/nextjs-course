import path from 'path'
import fs from 'fs/promises'

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    return JSON.parse(jsonData)
}

export default function ProductDetailPage({loadedProduct}) {

   if (!loadedProduct) {
       return <p>Loading...</p>
   }

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
}

/*
    For Dynamic Pages ([id] something....)
    the default behaviour of pre-rendering pages
    cannot be applied because Nextjs can't infer how
    many of these dynamic pages will need to be rendered.

    getStaticPaths() needs to be used
 */
export async function getStaticProps(context) {
    const {params} = context
    const productId = params.pid

    const data = await getData()
    const product = data.products.find(product => product.id === productId)

    if (!product) {
        return {notFound: true}
    }

    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths() {
    const data = await getData()

    const ids = data.products.map(product => product.id)
    const pathsWithParams = ids.map(id => ({
        params: {pid: id}
    }))

    /*
        When using fallback: true we are assuming and telling
        NextJs that not all dynamic pages need to be pre-rendered,
        and because of that, in the component the data that is not
         included here in the "paths" key will not be available immediatly
         and we need to check for it and show some Loading effect
     */
    return {
        /*paths: [
            {params: {pid: 'p1'}}
        ],*/
        paths: pathsWithParams,
        /*
            instead of a boolean we can set fallback to 'blocking'
            and we dont need to check the existence of the data
            in the component because Nextjs will wait for the data
            to fully pre-render the page on the serve and serve it

            IMO: fallbak to boolean + Suspense is a better approach
         */
        // fallback: true
        fallback: false
    }
}