import Link from 'next/link'
import classes from './event-item.module.css'

export default function EventItem(props) {
    const { title, image, date, location, id } = props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAdddress = location.replace(', ', '\n')

    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title}/>
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAdddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={{
                        pathname: '/events/[id]',
                        query: { id: id }
                    }}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}