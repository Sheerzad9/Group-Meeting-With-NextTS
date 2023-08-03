import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export type Meetup = {
  _id?: string;
  image: string;
  title: string;
  address: string;
  description?: string;
};

function MeetupItem(props: Meetup) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${props._id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className="flex place-content-center">
          <img className="mt-7 max-w-lg" src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address className="text-black">{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
