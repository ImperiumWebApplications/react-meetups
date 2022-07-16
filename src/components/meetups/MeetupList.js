import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} id={meetup.id} />
      ))}
    </ul>
  );
};
export default MeetupList;
