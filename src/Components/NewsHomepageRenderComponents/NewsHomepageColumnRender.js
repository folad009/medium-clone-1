import React,{Component} from 'react';
import NewsHomepageColumnCard from '../CardsComponents/MainNewsColumnCard';

class NewsHomePageColumnRender extends Component{
    render(){
        return(
            <div className="news-home-page-column-render-main-div">
                <NewsHomepageColumnCard/>
            </div>
        )
    }
}

export default NewsHomePageColumnRender;