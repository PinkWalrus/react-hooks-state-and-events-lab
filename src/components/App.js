import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Item from "./Item";
import itemData from "../data/items";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState();
  const [addItems, setAddItems] = useState(itemData);

  const appClass = isDarkMode ? "App dark" : "App light";

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={addItems} />
    </div>
  );
}

export default App;
