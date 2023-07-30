import {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

import MeetupList from "@/components/meetups/MeetupList";
import { Meetup } from "@/components/meetups/MeetupItem";

const DUMMY_MEETUPS: Meetup[] = [
  {
    id: "m1",
    title: "First Meetup!",
    image:
      "https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    address: "somewhere far away",
  },
  {
    id: "m2",
    title: "Second Meetup!",
    image:
      "https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
    address: "somewhere even further away",
  },
];

export default function HomePage(props: { meetups: Meetup[] }) {
  console.log(props);
  return <MeetupList meetups={props.meetups} />;
}

// In getServerSideProps function runs everytime it gets a request = client visiting the page
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// In getStaticProps function you can set timer for how often the function runs in server
export const getStaticProps: GetStaticProps = async () => {
  // fetch data from API, you have to always return object, which contains 'props' key, its reserved name
  const temp = DUMMY_MEETUPS;
  return {
    props: {
      meetups: temp,
    },
    revalidate: 10, // revalidate key takes value in seconds, this configures how often this page will be build = in our case how frequently the new data from db will be fetched
  };
};
