import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../util/api'

function HomePage({events}) {

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents()

    return {
        props: {
            evnts: featuredEvents
        },
        revalidate: 1800
    }
}

export default HomePage;
