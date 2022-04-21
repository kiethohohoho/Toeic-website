import React from "react";

const Button = ({ variant = "primary", type = "small", text }) => {
  return <button className={`${variant} ${type}`}>{text}</button>;
};

export default Button;
