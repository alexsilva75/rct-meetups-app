import cssStyle from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { FormEvent, useRef } from "react";
//import Meetup from "../../models/Meetup";
function NewMeetupForm(props: { onAddMeetup: (data: any) => void }) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const { onAddMeetup } = props;
  function submitHandler(event: FormEvent) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={cssStyle.form} onSubmit={submitHandler}>
        <div className={cssStyle.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={cssStyle.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={cssStyle.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={cssStyle.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id="description"
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={cssStyle.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
