import MeetupItem, { Meetup } from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props: { meetups: Meetup[] }) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
