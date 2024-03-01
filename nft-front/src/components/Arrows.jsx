import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import { IconContext } from "react-icons";

export default function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        flexDirection: "row-reverse",
        opacity: "1",
        background: "transparent",
        color: "#ccc",
        fontSize: "50px",
        width: "100%",

        zIndex: "0",
      }}
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "left",
        background: "transparent",
        color: "#ccc",
        fontSize: "50px",
        zIndex: "99",
        gap: "10px",
      }}
      onClick={onClick}
    >
      <MdArrowBackIos />
    </div>
  );
}
