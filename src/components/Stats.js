import React from "react";
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list🚀🚀</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentOfPacked = Math.round(numPacked / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentOfPacked === 100
          ? "✈️✈️you got everthing! Ready to go ✈️✈️"
          : `🎒🎒You have ${numItems} items on the list, you have already packed
          ${numPacked} i.e ${percentOfPacked}% items`}
      </em>
    </footer>
  );
}
