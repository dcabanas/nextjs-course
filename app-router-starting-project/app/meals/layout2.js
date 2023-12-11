
/*
    example of a nested layout (wrappers around pages in nextjs)
    that will provide some features/styles only to the pages under /meals route
 */

export default function MealsLayout({children}) {
    return (
        <>
            <p>Meals Layout</p>
            {children}
        </>
    )
}