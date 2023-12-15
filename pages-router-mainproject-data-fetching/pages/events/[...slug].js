import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'
import { getFilteredEvents } from '../../util/api'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

function FilteredEventsPage({ hasError, events, date }) {
    const [events, setEvents] = useState(null)
    const router = useRouter()

    const filterData = router.query.slug

    const {data, error} = useSWR('url')

    useEffect(() => {
        if (data) {
            const events = []
            for (const key in data) {
                events.push({
                    id: key,
                    ...data[key]
                })
            }
            setEvents(events)
        }

    }, [data])

    if (!events) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
    });


    if (hasError) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    //const filteredEvents = events

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    const filterData = params.slug

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return {
            props: { hasError: true }
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    return {
        props: {
            events: filteredEvents,
            date: new Date(numYear, numMonth - 1)
        }
    }
}

export default FilteredEventsPage
