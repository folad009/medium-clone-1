import React,{Component} from 'react';
import NewsHomepageColumnCard from '../CardsComponents/MainNewsColumnCard';
import {connect} from 'react-redux';
import {getAllPosts} from '../../ducks/reducer';
import PopularFromNetWorkContainer from '../CardContainers/PopularFromNetwork';


class NewsHomePageColumnRender extends Component{
    componentDidMount(){
        this.props.getAllPosts()
    }

    render(){
        
        const postsList = this.props.posts.length > 0 ? this.props.posts.map((article,i)=>{
            return(
                <NewsHomepageColumnCard  articleTitle={article.title} articleDate={article.date} articleAuthorFirstName={article.firstname} articleAuthorLastName={article.lastname} articleImg={article.thumbnailimg}/>
            )
        })
        : <div>loading......</div>

        return(
            <div className="news-home-page-column-render-main-div">
                <div className="news-home-page-column-main-articles">
                    {postsList}
                </div>
                <div className="news-home-page-column-main-from-network-div">
                    <PopularFromNetWorkContainer/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps,{getAllPosts})(NewsHomePageColumnRender);