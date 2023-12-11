'use client' // needed because of useFormState

/*
  if we needed we could use 'use client' here
  because the server action is in a separate file
 */
import classes from './page.module.css'
import ImagePicker from '@/components/meals/image-picker'
import { shareMeal } from '@/lib/actions'
import MealsFormSubmit from '@/components/meals/meals-form-submit'
// import {useFormStatus} from 'react-dom'
import {useFormState} from 'react-dom'

export default function ShareMealPage() {
  /*
    async + 'use server' inside a function creates a server action

    if this component for some reason required to have some
    interactions or client-side related code (therefore being a Client Component)
    this would not work because it is not allowed to declare server actions
    inside Client Components

    a better approach for these scenarios is to store our
    server actions in separate files
   */
  /*async function shareMeal(formData) {
    'use server'

    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    console.log(meal)
  }*/

  /*
    This special hook only works for Client Components, which makes sense
    because we want to give some feedback to the user, and we could make it
    here but this hook also only works inside forms
   */
  // const status = useFormStatus()

  /*
    Another special Nextjs hook that allows us to manage
    the state of this component. The first argument is the server action
    and the second is the initial state before the server action
    returns its value/response
   */
  const [state, formAction] = useFormState(shareMeal, {message: null})

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image"/>
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}
