import React, { Component } from 'react';
import MainHeader from '../HeaderComponents/MainHeader';
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import ChatIcon from 'react-icons/lib/io/ios-chatbubble-outline';
import TwitterIcon from "react-icons/lib/io/social-twitter-outline";
import FacebookIcon from 'react-icons/lib/io/social-facebook-outline';
import Clap from 'react-clap-button'
import ClapComponent from 'react-clap';

class StoryRenderComponent extends Component {
  constructor() {
    super();

    this.state = {
      post: "",
      comment: "",
      postComments: [],
      claps: "",
      img: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/getpost/${this.props.match.params.id}`)
      .then(r => {
        this.setState({ post: r.data[0].body, claps: r.data[0].rating, img: r.data[0].thumbnailimg });
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
          console.log(r.data)
          this.setState({ postComments: r.data })
        }))

  }

  createMarkup(str) {
    return { __html: str };
  }

  addcomment(id, body) {
    let comment = {
      id: id,
      body: body
    }
    axios.post('/api/addcomment', comment).then(() => axios.get(`/api/comments/${this.props.match.params.id}`).then(r => {
      console.log(r.data)
      this.setState({ postComments: r.data })
    })).catch(err => console.log(err))

  }

  addClap() {

    let newClaps = this.state.claps += 1;
    let claps = { claps: newClaps }

    axios.put(`/api/clap/${this.props.match.params.id}`, claps).then(r => {
      this.setState({ claps: r.data[0].rating })
    }).catch(err => console.log(err))
  }

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
      return (
        <div key={i} className="main-comment-render-body-div">
          <div className="comment-render-avatar-info-main-div">
            <img style={{ height: "50px", borderRadius: '50px', margin: '5px' }} src={item.avatar} alt="avatar" />
            <div id="comment-render-info">
              {item.firstname} {item.lastname}
              <p>timestamp</p>
            </div>
          </div>
          <div className="main-comment-render-text">
            {item.body}
          </div>
          <div className="clap-save-comment">

            <span onClick={() => this.addCommentClap()} > <Clap
              count={0}
              countTotal={0}

              isClicked={false}
            />   </span>




          </div>
        </div>
      )
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
        <span onClick={() => this.addClap()}>{claps}</span>
        {this.state.img && <img src={this.state.img} alt="" />}
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
        <div>{comments}</div>
      </div>
    );
  }
}
export default withRouter(StoryRenderComponent);