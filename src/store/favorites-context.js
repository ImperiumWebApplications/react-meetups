import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favorites: [],
  totalFavorite: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

const FavoriteProvider = ({ children }) => {
  const [userFavorite, setUserFavorite] = useState([]);
  useState(() => {
    fetch("https://react-http-4021d-default-rtdb.firebaseio.com/favorites.json")
      .then((res) => res.json())
      .then((data) => {
        const loadedFavorites = [];
        for (const key in data) {
          loadedFavorites.push({
            ...data[key],
            id: data[key].id,
          });
        }
        setUserFavorite(loadedFavorites);
      });
  }, []);

  const addFavorite = (meetup) => {
    // POST meetup for the favorites collection
    // Send the meetupID to firebase server as the one received as a parameter
    fetch(
      "https://react-http-4021d-default-rtdb.firebaseio.com/favorites.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setUserFavorite([...userFavorite, { ...meetup }]);
      })
      .catch((err) => console.log(err));
  };

  const removeFavorite = (id) => {
    fetch(
      "https://react-http-4021d-default-rtdb.firebaseio.com/favorites.json",
      {
        method: "DELETE",
        body: JSON.stringify(id),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setUserFavorite(userFavorite.filter((meetup) => meetup.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const isFavorite = (id) => {
    return userFavorite.find((meetup) => meetup.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites: userFavorite,
        totalFavorite: userFavorite.length,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteProvider;
