import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import { getFeaturedEvents, getEventById } from '../../util/api'

function EventDetailPage({ selectedEvent }) {
    const event = selectedEvent

    if (!event) {
        return (
           <div className="center">
               <p>Loading...</p>
           </div>
        )
    }

    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId
    const event = await getEventById(eventId)

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const allEvents = await getFeaturedEvents()
    const pathsWithParams = allEvents.map(event => ({
        params: { eventId: event.id }
    }))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default EventDetailPage
