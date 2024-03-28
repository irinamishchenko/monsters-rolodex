import { useState, useEffect } from "react";
import SearchBox from "./components/searchBox/SearchBox";
import CardList from "./components/cardList/CardList";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchInput);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchInput]);

  function handleInputChange(event) {
    setSearchInput(event.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChange={handleInputChange}
        placeholder={"search monsters"}
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
