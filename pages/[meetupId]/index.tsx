import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "@/components/meetups/MeetUpDetail";
import { Meetup } from "@/components/meetups/MeetupItem";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export default function MeetupDetails(props: { meetUpData: Meetup }) {
  return (
    <MeetUpDetail
      image={props?.meetUpData?.image}
      title={props?.meetUpData?.title}
      address={props?.meetUpData?.address}
      description={props?.meetUpData?.description}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking", // If set to false, this tells next.js that all possible paths are listed in 'path' key value, so if you enter params other than found in the list -> 404 ERROR. So if you set fallback to true, next tries to create the page even tho the param is not found in the paths key value list.
    paths: [
      {
        params: {
          meetupId: "64cbc8409cc8c7ebe930d9aa",
        },
      },
    ],
  };
};

interface IParams extends ParsedUrlQuery {
  meetupId: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { meetupId } = context.params as IParams;
  console.log("Params: ", context.params);
  console.log("meetupId", meetupId);
  let meetup;
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI_WITH_PWD!);
    const db = client.db();
    meetup = (await db
      .collection("meetups")
      .findOne({ _id: new ObjectId(meetupId) })) as unknown as Meetup;
    console.log("Hola: ", meetup);
    client.close();
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      meetUpData: { ...meetup, _id: meetup?._id?.toString() },
    },
  };
};
