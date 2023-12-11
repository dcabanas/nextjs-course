'use server'
/*
    All functions created here will be server actions

    Check main commented code in /meals/share/page.js
 */

import { saveMeal } from '@/lib/meals'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

function isInvalidText(text) {
    return !text || text.trim() === ''
}

/*
    If useFormState is not used this server action
    only needs the formData as argument and can be
    used direction in the "action" form attribute
 */
export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    console.log(meal)

    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        // server actions can also return object responses
        // this object needs to be serializable (no functions)
        return {
            message: 'Invalid input'
        }
    }

    await saveMeal(meal)

    /*
        Nextjs pre generates all static pages we have
        and caches/fetches their data even during building process

        This special function tells Nextjs to revalidate the cache
        that belongs to a certain route path. Its default second argument
        is 'page' which means only to revalidate a certain page, while
        'layout' means to revalidate this page and all nested pages

        Since in this case mealSlug pages are not pre generated during building
        and the share page doesnt depend on the meals data, we just need
        to revalidate cache for meals page
     */
    revalidatePath('/meals')
    redirect('/meals')
}