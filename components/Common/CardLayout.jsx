import React from "react";

const CardLayout = ({ children, className = "h-full w-full" }) => {
  return (
    <div className={`${className} boxShodow transition rounded-xl`}>
      {children}
    </div>
  );
};

export default CardLayout;