import React from "react";
import "./container.scss";

const Container = ({ type, children, ...rest }) => {
  if (type === "wide") {
    return (
      <div {...rest} className="container-wide">
        {children}
      </div>
    );
  } else {
    return (
      <div {...rest} className="container-normal">
        {children}
      </div>
    );
  }
};

export default Container;
