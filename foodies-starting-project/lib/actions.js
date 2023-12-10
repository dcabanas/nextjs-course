'use server'
/*
    All functions created here will be server actions

    Check main commented code in /meals/share/page.js
 */

import { saveMeal } from '@/lib/meals'
import { redirect } from 'next/navigation'

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    console.log(meal)

    await saveMeal(meal)
    redirect('/meals')
}