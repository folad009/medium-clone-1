import React from "react";
import { Popover } from "antd";

function PopOver(props) {
  const content = (
    <div style={{ width: "50%", textAlign: "left" }}>
      <h2>{`${props.user.firstname} ${props.user.lastname}`}</h2>
      <img
        style={{
          height: "60px",
          width: "60px",
          backgroundColor: "#bbb",
          borderBottomLeftRadius: "50%",
          borderTopLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          borderTopRightRadius: "50%",
          display: "inline-block"
        }}
        src={props.user.avatar}
      />
      <p style={{ fontSize: ".8em" }}>{props.user.bio}</p>
    </div>
  );
  return (
    <Popover content={content} trigger="hover">
      {props.name}
    </Popover>
  );
}

export default PopOver;
