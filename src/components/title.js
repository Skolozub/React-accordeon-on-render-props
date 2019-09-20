import React from "react";

export const Title = ({ activeItems, toggle, itemKey, children }) => {
  const toggleItem = () => toggle(itemKey);
  const isActive = activeItems.includes(itemKey);

  return (
    <div
      onClick={toggleItem}
      style={{ background: isActive ? "pink" : "lightgreen" }}
    >
      {children}
    </div>
  );
};
