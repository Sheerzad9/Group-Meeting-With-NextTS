import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetUpPage() {
  function addMeetUpHandler(enteredMeetUpData: any) {
    console.log(enteredMeetUpData);
  }

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}
