import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  async function addMeetupHandler(data: any) {
    console.log("Submitting data: ", data);
    const response = await fetch(
      "https://rn-complete-guide-86f0c.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );

    const responseData = response.json();

    console.log("Post response: ", responseData);
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
}

export default NewMeetupPage;
