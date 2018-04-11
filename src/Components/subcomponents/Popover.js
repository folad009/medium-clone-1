import React from "react";
import { Popover } from "antd";

function PopOver(props) {
  const content = (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "80%" }}>
          <h2>{`${props.user.firstname} ${props.user.lastname}`}</h2>
          <p style={{ fontSize: ".9em", textAlign: "left" }}>
            {props.user.bio}
          </p>
        </div>
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
        <hr />
      </div>
      <button style={{ marginLeft: "70%" }} className="profile-follow-btn">
        Follow
      </button>
    </div>
  );
  return (
    <Popover content={content} trigger="hover">
      {props.name}
    </Popover>
  );
}

export default PopOver;
