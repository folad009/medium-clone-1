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
        <Menu.Item key="0">
          <Link to="/new-story"> New Story </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/new-story"> Stories </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/new-story"> Stats </Link>
        </Menu.Item>
        <hr />
        <Menu.Item key="4">
          <Link to="/new-story"> Bookmarks </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/new-story"> Customize your interests </Link>
        </Menu.Item>
        <hr />
        <Menu.Item key="6">
          <Link to="/new-story"> Profile </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/new-story"> Help </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <button onClick={() => this.props.logOut()}>Sign Out </button>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Dropdown overlay={menu} trigger={["click"]} placement="bottomCenter">
          <img className="user-image" src={this.props.user.avatar} />
        </Dropdown>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { logOut })(ImageIcon);
