import { Meetup } from "./MeetupItem";

/* eslint-disable @next/next/no-img-element */
const MeetUpDetail = (props: Meetup) => {
  return (
    <section className="text-center">
      <img className="w-full" src={props.image} alt={props.title} />
      <h1 className="text-4xl font-extrabold dark:text-white">{props.title}</h1>
      <address>{props.address}</address>
      <p className="tracking-tight text-white md:text-lg dark:text-gray-40">
        {props.description}
      </p>
    </section>
  );
};

export default MeetUpDetail;
