import classes from "./Card.module.css";

function Card(props: { children: React.ReactNode }) {
  return (
    <div
      className={`${classes.card} hover:skew-y-1 hover:m-5 hover:shadow-xl duration-500`}
    >
      {props.children}
    </div>
  );
}

export default Card;
