import React, { Component } from 'react';
import MainHeader from '../HeaderComponents/MainHeader';
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import ChatIcon from 'react-icons/lib/io/ios-chatbubble-outline';
import TwitterIcon from "react-icons/lib/io/social-twitter-outline";
import FacebookIcon from 'react-icons/lib/io/social-facebook-outline'

class StoryRenderComponent extends Component {
    constructor() {
        super()

        this.state = {
            post: "",
            comment: "",
            postComments: [],
            claps: 0
        }
    }

    componentDidMount() {
        axios.get(`/api/getpost/${this.props.match.params.id}`).then(r => {

            this.setState({ post: r.data[0].body, claps: r.data[0].rating })
        }).catch(err => console.log(err))

        axios.get(`/api/comments/${this.props.match.params.id}`).then(r => {
            console.log(r.data)
            this.setState({ postComments: r.data })
        })

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

    render() {

        let post;
        if (this.state.post) {
            post = this.state.post
        }

        let comments = this.state.postComments.map((item, i) => {
            return <div key={i} >  <img style={{ height: "30px" }} src={item.avatar} alt="" />  {item.firstname} {item.lastname} <br />
                {item.body}</div>
        })

        return (
            <div className="story-render-component-main-div">

                <div>Claps:{this.state.claps}  <button onClick={() => this.addClap()} >Clap</button> </div>
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
}
export default withRouter(StoryRenderComponent);