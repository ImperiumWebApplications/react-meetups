import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { FavoriteContext } from "../store/favorites-context";

const Favorites = () => {
  const ctx = useContext(FavoriteContext);
  return (
    <div>
      <h1>Favorites</h1>
      {ctx.totalFavorite > 0 ? (
        <MeetupList meetups={ctx.favorites} />
      ) : (
        <p>You have no favorites yet.</p>
      )}
    </div>
  );
};
export default Favorites;
