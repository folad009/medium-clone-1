import React from "react";
import "./subcomponents.css";

//This component takes in two props: tabs - takes in array of strings containing tab values ::: styles - takes in string of classNames to append to each elements' classList

class TabHeading extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "TabHeading1"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    if (this.state.active) {
      document.getElementById(this.state.active).classList.remove("active");
    }
    this.setState(
      { active: e.target.id },
      document.getElementById(e.target.id).classList.add("active")
    );
  }
  render() {
    const tabReel = this.props.tabs.map((val, index) => {
      if (index === 0) {
        return (
          <div
            className={`tab-heading-tab active ${this.props.styles}`}
            id={`TabHeading${index + 1}`}
            onClick={e => this.handleClick(e)}
          >
            {val}
          </div>
        );
      }
      return (
        <div
          className="tab-heading-tab"
          id={`TabHeading${index + 1}`}
          onClick={e => this.handleClick(e)}
        >
          {val}
        </div>
      );
    });
    return <div className="tab-heading-main-div">{tabReel}</div>;
  }
}

export default TabHeading;
