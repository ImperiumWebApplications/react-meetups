import { useContext } from "react";
import { FavoriteContext } from "../../store/favorites-context";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ meetup }) => {
  const ctx = useContext(FavoriteContext);
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          {ctx.isFavorite(meetup.id) ? (
            <button onClick={ctx.removeFavorite.bind(null, meetup.id)}>
              Remove From Favorites
            </button>
          ) : (
            <button onClick={ctx.addFavorite.bind(null, meetup)}>
              Add to Favorites
            </button>
          )}
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
