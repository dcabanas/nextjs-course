import classes from './event-item.module.css'
import DateIcon from '../ui/icons/date-icon'
import AddressIcon from '../ui/icons/address-icon'
import ArrowRightIcon from '../ui/icons/arrow-right-icon'
import Button from '../ui/button'

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
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAdddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={{
                        pathname: '/events/[id]',
                        query: { id: id }
                    }}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}