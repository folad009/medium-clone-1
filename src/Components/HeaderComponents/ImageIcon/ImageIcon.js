import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { logOut } from "./../../../ducks/reducer";

class ImageIcon extends Component {
  constructor() {
    super();
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0" className="nav-item-dropdown">
          <Link to="/new-story"> New Story </Link>
        </Menu.Item>

        <Menu.Item key="3" className="nav-item-dropdown">
          <Link to="/new-story"> Stats </Link>
        </Menu.Item>
        <hr style={{ opacity: 0.7 }} />
        <Menu.Item key="4" className="nav-item-dropdown">
          <Link to="/saved"> Bookmarks </Link>
        </Menu.Item>
        <Menu.Item key="5" className="nav-item-dropdown">
          <Link to="/topics"> Customize your interests </Link>
        </Menu.Item>
        <hr style={{ opacity: 0.7 }} />
        <Menu.Item key="6" className="nav-item-dropdown">
          <Link to={`/user/${this.props.user.id}`}> Profile </Link>
        </Menu.Item>
        <Menu.Item key="7" className="nav-item-dropdown">
          <Link to="/new-story"> Help </Link>
        </Menu.Item>
        <Menu.Item key="8" className="nav-item-dropdown">
          <button
            style={{
              backgroundColor: "none",
              color: "inherit",
              border: "none",
              padding: "0",
              font: "inherit",
              cursor: "pointer",
              opacity: 0.7
            }}
            onClick={() => this.props.logOut()}
          >
            Sign Out{" "}
          </button>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Dropdown overlay={menu} trigger={["click"]} placement="bottomCenter">
          <img
            className="user-image"
            src={this.props.user.avatar}
            style={{ cursor: "pointer" }}
          />
        </Dropdown>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { logOut })(ImageIcon);
