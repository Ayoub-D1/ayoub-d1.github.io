import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./Components/search-box/search-box.component";
import CardList from "./Components/card-list/card-list.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFileredMonsters] = useState(monsters);
  const [imageSetNumber, setImageSetNumber] = useState(4);

  // This replicated the **componenetDidMount** method
  // It would only be called once on first render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const filtered = monsters.filter(monster =>
      monster.name
        .split(" ")
        .some(el =>
          el.toLowerCase().trim().startsWith(searchField.toLowerCase())
        )
    );
    setFileredMonsters(filtered);
  }, [monsters, searchField]);

  const onValueChanged = evt => {
    setSearchField(evt.target.value);
  };

  const onSelectOptionChange = evt => {
    setImageSetNumber(evt.target.value);
  };
  return (
    <main className="App">
      <select
        className="dropdown"
        name="monsterSet"
        onChange={onSelectOptionChange}
        defaultValue={imageSetNumber}
      >
        <option value="1">Robot</option>
        <option value="2">Monsters</option>
        <option value="3">Futurama</option>
        <option value="4">Kitten</option>
      </select>
      <h1 className="app-title">Friendly Monsters</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onValueChanged}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters} setNumber={imageSetNumber} />
    </main>
  );
};

export default App;
