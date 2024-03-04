import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItem] = useState([]);

  const handleAddItems = (item) => {
    setItem((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItem((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearItems = () => {
    const confirmed = window.confirm("are you sure you want to delete itmes");
    if (confirmed) setItem([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
