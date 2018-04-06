import React, { Component } from "react";
import MainHeader from "../HeaderComponents/MainHeader";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import ChatIcon from "react-icons/lib/io/ios-chatbubble-outline";
import TwitterIcon from "react-icons/lib/io/social-twitter-outline";
<<<<<<< HEAD
import FacebookIcon from "react-icons/lib/io/social-facebook-outline";
import Clap from "react-clap-button";
=======
import FacebookIcon from 'react-icons/lib/io/social-facebook-outline';
import Clap from 'react-clap-button'
import ClapComponent from 'react-clap';
>>>>>>> master

class StoryRenderComponent extends Component {
  constructor() {
    super();

    this.state = {
      post: "",
      comment: "",
      postComments: [],
      claps: ""
    };
  }

  componentDidMount() {
    axios
      .get(`/api/getpost/${this.props.match.params.id}`)
      .then(r => {
        this.setState({ post: r.data[0].body, claps: r.data[0].rating });
      })
      .catch(err => console.log(err));

    axios.get(`/api/comments/${this.props.match.params.id}`).then(r => {
      console.log(r.data);
      this.setState({ postComments: r.data });
    });
  }

  createMarkup(str) {
    return { __html: str };
  }

  addcomment(id, body) {
    let comment = {
      id: id,
      body: body
    };
    axios
      .post("/api/addcomment", comment)
      .then(() =>
        axios.get(`/api/comments/${this.props.match.params.id}`).then(r => {
          console.log(r.data);
          this.setState({ postComments: r.data });
        })
      )
      .catch(err => console.log(err));
  }

  addClap() {
    let newClaps = (this.state.claps += 1);
    let claps = { claps: newClaps };

    axios
      .put(`/api/clap/${this.props.match.params.id}`, claps)
      .then(r => {
        this.setState({ claps: r.data[0].rating });
      })
      .catch(err => console.log(err));
  }

  addCommentClap(claps, id) {
    claps += 1;
    let clap = { claps: claps, postid: this.props.match.params.id };

    console.log(clap);

    axios.put(`/api/commentClap/${id}`, clap).then(r => {
      this.setState({ postComments: r.data });
    });
  }

  render() {
    let post;
    if (this.state.post) {
      post = this.state.post;
    }

    console.log(this.state.postComments);

    let comments = this.state.postComments.map((item, i) => {
      return (
        <div key={i}>
          {" "}
          <img style={{ height: "30px" }} src={item.avatar} alt="" />{" "}
          {item.firstname} {item.lastname} <br />
          {item.body}
          <button
            onClick={() => {
              this.addCommentClap(item.claps, item.id);
            }}
          >
            {item.claps}
          </button>
        </div>
      );
    });
    let claps;

    if (this.state.claps) {
      claps = (
        <Clap count={0} countTotal={this.state.claps} isClicked={false} />
      );
    addCommentClap(claps, id) {

        let clap = { claps: claps, postid: this.props.match.params.id }
        console.log(clap)
        axios.put(`/api/commentClap/${id}`, clap).then((r) => {
            this.setState({ postComments: r.data })
        })
    }

    render() {

        let post;
        if (this.state.post) {
            post = this.state.post
        }

        console.log(this.state.postComments)

        let comments = this.state.postComments.map((item, i) => {
            return
            <div key={i} >  <img style={{ height: "30px" }} src={item.avatar} alt="" />  {item.firstname} {item.lastname} <br />
                {item.body}
                <ClapComponent
                    popupClapCount={item.claps}
                    maxClapCount={50}
                    onChange={(newClapCount, diff) => {
                        this.addCommentClap(newClapCount, item.id)
                    }}
                />
                <button onClick={() => {
                    this.addCommentClap(item.claps, item.id)
                }} >{item.claps}</button>
            </div>
        })
        let claps

        if (this.state.claps > 0) {
            claps = <Clap
                count={0}
                countTotal={this.state.claps}

                isClicked={false}
            />
        } else if (this.state.claps === 0) {
            claps = <Clap
                count={0}
                countTotal={0}

                isClicked={false}
            />
        }
        let num = this.state.claps;

        return (
            <div className="story-render-component-main-div">



                <span
                    onClick={() => this.addClap()} >
                    {claps}
                </span>


                <div className="story-render-component-body" dangerouslySetInnerHTML={this.createMarkup(post)} />

                <div> <input onChange={(e) => this.setState({ comment: e.target.value })} type="text" /> <button onClick={() => this.addcomment(this.props.match.params.id, this.state.comment)} >Submit</button>  </div>


                <div>{comments}</div>

                <div className="story-render-component-clap-section">
                    <div className="story-render-component-clap-section-text">
                        <h4>One clap, two clap, three clap, forty?</h4>
                        <p>By clapping more or less, you can signal to us which stories really stand out.</p>
                    </div>
                    <div className="story-render-component-clap-section-icons-div">
                        <img />
                        <ChatIcon className="story-header-icons" />
                        <p>3</p>
                        <TwitterIcon className="story-header-icons" />
                        <FacebookIcon className="story-header-icons" />
                    </div>
                </div>
            </div>
        )
    }
    let num = this.state.claps;

    return (
      <div className="story-render-component-main-div">
        <span onClick={() => this.addClap()}>{claps}</span>

        <div>
          Claps:{this.state.claps}{" "}
          <button onClick={() => this.addClap()}>Clap</button>{" "}
        </div>
        <div
          className="story-render-component-body"
          dangerouslySetInnerHTML={this.createMarkup(post)}
        />

        <div>
          {" "}
          <input
            onChange={e => this.setState({ comment: e.target.value })}
            type="text"
          />{" "}
          <button
            onClick={() =>
              this.addcomment(this.props.match.params.id, this.state.comment)
            }
          >
            Submit
          </button>{" "}
        </div>

        <div>{comments}</div>

        <div className="story-render-component-clap-section">
          <div className="story-render-component-clap-section-text">
            <h4>One clap, two clap, three clap, forty?</h4>
            <p>
              By clapping more or less, you can signal to us which stories
              really stand out.
            </p>
          </div>
          <div className="story-render-component-clap-section-icons-div">
            <img />
            <ChatIcon className="story-header-icons" />
            <p>3</p>
            <TwitterIcon className="story-header-icons" />
            <FacebookIcon className="story-header-icons" />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(StoryRenderComponent);
