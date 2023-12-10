import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

export default function MealPage({params}) {
    const meal = getMeal(params.slug)

    if (!meal) {
        // a special function provided by Nextjs that searches the closest
        // not-found.js page in our tree to throw an Error

        // any code bellow is not executed
        notFound()
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions}
                   dangerouslySetInnerHTML={{__html: meal.instructions}}>
                </p>
            </main>
        </>
    )
}