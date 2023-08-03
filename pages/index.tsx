import "dotenv/config";
import { MongoClient } from "mongodb";
import { GetStaticProps } from "next";

import MeetupList from "@/components/meetups/MeetupList";
import { Meetup } from "@/components/meetups/MeetupItem";

export default function HomePage(props: { meetups: Meetup[] }) {
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

interface MongoMeetupCollection {
  _id: object | string;
  title: string;
  image: string;
  address: string;
  description: string;
}
const getAllMeetupsHelper = async () => {
  let meetUps: MongoMeetupCollection[] = [];
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI_WITH_PWD!);
    const db = client.db();
    meetUps = (await db
      .collection("meetups")
      .find()
      .toArray()) as unknown as MongoMeetupCollection[];
    console.log("Hola: ", meetUps);
    client.close();
  } catch (e) {
    console.log(e);
  }
  return meetUps.map((meetup) => {
    return { ...meetup, _id: meetup._id.toString() };
  });
};

// In getStaticProps function you can set timer for how often the function runs in server
export const getStaticProps: GetStaticProps = async () => {
  // fetch data from API, you have to always return object, which contains 'props' key, its reserved name
  const meetUps = await getAllMeetupsHelper();
  console.log("GOT BACK RESULT: ", meetUps);

  return {
    props: {
      meetups: meetUps.reverse(),
    },
    revalidate: 10, // revalidate key takes value in seconds, this configures how often this page will be build = in our case how frequently the new data from db will be fetched
  };
};
