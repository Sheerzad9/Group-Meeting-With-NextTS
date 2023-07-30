import MeetUpDetail from "@/components/meetups/MeetUpDetail";
import { Meetup } from "@/components/meetups/MeetupItem";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export default function MeetupDetails(props: { meetUpData: Meetup }) {
  return (
    <MeetUpDetail
      image="https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      title="Somewhere far away"
      address="Street Somewehre, 5, City"
      description="The meetup description"
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true, // If set to false, this tells next.js that all possible paths are listed in 'path' key value, so if you enter params other than found in the list -> 404 ERROR. So if you set fallback to true, next tries to create the page even tho the param is not found in the paths key value list.
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
};

interface IParams extends ParsedUrlQuery {
  meetUpID: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { meetUpID } = context.params as IParams;

  return {
    props: {
      meetUpData: {
        id: "m1",
        image:
          "https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        title: "Somewhere far away",
        address: "Street Somewehre, 5, City",
        description: "The meetup description",
      },
    },
  };
};
