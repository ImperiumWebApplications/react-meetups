import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://react-http-4021d-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => res.json())
      .then((res) => {
        // Transform the data into an array of objects
        const meetups = Object.keys(res).map((key) => {
          return {
            ...res[key],
            id: key,
          };
        });
        setMeetups(meetups);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <h1>All Meetups</h1>
      {loading ? <p>Loading...</p> : <MeetupList meetups={meetups} />}
    </section>
  );
};
export default AllMeetups;
