import { useState, useCallback } from "react"

export default function Sidebar() {
  let [menuItems, setMenuItems] = useState([]);
  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");

  let addMenuItem = useCallback(() => {
      setMenuItems([...menuItems, newMenuItem]);
      console.log("Added menu item");
      setNewMenuItem("");
  }, [menuItems, newMenuItem]);


return (
  <div>
    <ul>
      {menuItems
        .filter((item) => new RegExp(filter, "i").test(item))
        .map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
    <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  );
}

