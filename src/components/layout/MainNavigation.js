import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const ctx = useContext(FavoriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            <span className={classes.badge}>
              {ctx.totalFavorite > 0 ? <span>{ctx.totalFavorite}</span> : 0}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
