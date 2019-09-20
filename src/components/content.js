import React from "react";

export const Content = ({ activeItems, itemKey, children }) => {
  const isActive = activeItems.includes(itemKey);

  return <>{isActive ? children : null}</>;
};
