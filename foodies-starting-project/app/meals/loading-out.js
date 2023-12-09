import classes from './loading.module.css'

/*
    loading.js is another reserved filename that applies to all
    siblings + nested sub-folders that fetch data

    there is a better approach if we want to show immediate content when the
    page loads but wait for some content to be fetched (check meals/page.js)
    By renaming this component to something not Nextjs filename reserved,
    we can combine it with React Suspense to improve loading user experience.

    loading.js Nextjs filename reserved does this under the hood (the loading part)
    but not the user experience improvement
 */
export default function LoadingMealsPage() {
    return <p className={classes.loading}>Fetching meals...</p>
}