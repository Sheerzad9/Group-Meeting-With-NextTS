import { Meetup } from "./MeetupItem";

/* eslint-disable @next/next/no-img-element */
const MeetUpDetail = (props: Meetup) => {
  return (
    <div className="bg-[#087f5b] rounded-lg">
      <section className="text-center realtive">
        <img
          className="w-full rounded-t-lg"
          src={props.image}
          alt={props.title}
        />
        <div className="mt-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold dark:text-white">
            {props.title}
          </h1>
          <address>{props.address}</address>
          <p className="tracking-tight text-white md:text-lg dark:text-gray-40">
            {props.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default MeetUpDetail;
