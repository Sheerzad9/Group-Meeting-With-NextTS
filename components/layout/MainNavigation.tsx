import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={`${classes.header} bg-[#343a40]`}>
      <div
        className={`${classes.logo} mb-4 text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl`}
      >
        <Link href="/">React Meetups</Link>
      </div>
      <nav>
        <ul>
          <li className="text-black">
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
