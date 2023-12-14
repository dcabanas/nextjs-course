import { useRouter } from 'next/router'
import { getEventById } from '../../../dummy-data'
import EventSummary from '../../../components/events/event-detail/event-summary'
import EventLogistics from '../../../components/events/event-detail/event-logistics'
import EventContent from '../../../components/events/event-detail/event-content'
import ErrorAlert from '../../../components/ui/error-alert'

export default function EventDetailPage() {
    const router = useRouter()
    console.log(router.query)

    const event = getEventById(router.query.id)
    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        )
    }

    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.alt}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}