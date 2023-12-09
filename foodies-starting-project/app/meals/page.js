import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
import LoadingMealsPage from '@/app/meals/loading-out'

/*
    Server components in NextJS can be async and fetch data directly to a remote db
    Everytime we visit a page NextJS caches it and any data it might contain
 */
async function Meals() {
    const meals = await getMeals()

    return <MealsGrid meals={meals}/>
}

export default function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href="meals/share">
                        Share Your Favourite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<LoadingMealsPage/>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}