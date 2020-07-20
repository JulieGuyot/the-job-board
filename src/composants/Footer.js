import React from "react";

const Footer = (props) => {
  return (
    <div className={props.className}>
      Made with <span className="gras">{props.tech}</span> at{" "}
      <span className="gras">{props.lieu}</span> by{" "}
      <span className="gras">{props.name}</span>
    </div>
  );
};

export default Footer;
