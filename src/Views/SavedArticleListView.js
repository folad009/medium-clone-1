import React,{Component} from 'react';
import MainHeader from '../Components/HeaderComponents/MainHeader';

class SavedArticleListView extends Component{
    
    render(){
        return(
            <div className="saved-article-list-view-main-div">
            <MainHeader/>
                <div className="saved-article-header-and-tabs">
                    <h1>Reading List</h1>
                    <div id="saved-archived">
                        <p>saved (2)</p>
                        <p>archived (8)</p>
                     
                    </div>
                    
                    <input defaultValue="Search Your Saved Stories" id="saved-article-search-input"/>       
                    
                </div>
                <div className="saved-article-content-div">
                    <div className="saved-article-card-main-div">
                    <div className="saved-article-card-info">
                        <h1>
                        A journey to becoming a Product Designer at Facebook — An interview with GB
                        </h1>
                        <p>
                        Hi GB, please introduce yourself.
                        </p>
                        <p>Sketch App Sources</p>
                    <div className="archive-remove">
                    <p>archive</p>
                    <p>remove</p>
                    </div>
                    </div>
                    <div>
                        <img src="https://cdn-images-1.medium.com/max/2000/1*55ZkKbn9BzBKWs3tfe4xqw.jpeg" id="saved-article-image"/>
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}
export default SavedArticleListView;

