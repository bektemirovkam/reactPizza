import React from "react";

const Button = ({ className, onCkick, children }) => {
  return (
    <button className={className} onClick={onCkick}>
      {children}
    </button>
  );
};

export default Button;
