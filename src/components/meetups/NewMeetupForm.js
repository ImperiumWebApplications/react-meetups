import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      title: event.target.title.value,
      image: event.target.image.value,
      address: event.target.address.value,
      description: event.target.description.value,
    };
    onAddMeetup(enteredData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea type="text" id="description" required />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
