import axios from "axios";
import { useRouter } from "next/router";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetUpHandler(enteredMeetUpData: any) {
    const res = await axios.post("/api/new-meetup", enteredMeetUpData);

    const { data } = res;
    console.log(data);

    router.push("/");
  }

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}
