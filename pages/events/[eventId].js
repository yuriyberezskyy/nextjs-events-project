import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy_data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

export default function EventPage() {
  const router = useRouter();
  console.log(router.query);
  const event = getEventById(router.query.eventId);
  console.log(event);

  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
