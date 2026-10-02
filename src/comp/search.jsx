import { useState, useEffect } from "react";
import { getGames } from "../Api/gamesapi";

function Search() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getGames()
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" py-5 px-5  font-serif font-extrabold"
      />

      {/* Show results ONLY after typing */}
      {search.length > 0 &&
        filterGames.map((game) => (
          <div key={game.id}>
            <h3 className="py-1 font-extrabold font-serif cursor-pointer hover:black/40  ">{game.name}</h3>
          </div>
        ))}
    </div>
  );
}

export default Search;