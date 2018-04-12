import React,{Component} from 'react';
import MainHeader from '../Components/HeaderComponents/MainHeader';
import {connect} from "react-redux";
import {getReadingList,deleteFromReadingList} from '../ducks/reducer';
import {Link} from 'react-router-dom'

class SavedArticleListView extends Component{
    componentDidMount(){
        this.props.getReadingList(this.props.user.id).then(console.log("this is props",this.props.readingList))
    }
    createMarkup(str) {
        return { __html: str };
      }
    
    render(){
        console.log("this is props",this.props.readingList)
        function trimmedBody(str) {
            let trimmed = str.substring(0, 100);
            trimmed.length === 100 ? (trimmed += "...") : trimmed;
            return trimmed;
          }
        const readingListRender = (!this.props.readingList) ? "LOG IN TO SEE SAVED" : this.props.readingList.map((article,i)=>{
            console.log("this is props reading list",this.props)
            return(
                <div className="saved-article-card-main-div">
                
                    <div className="saved-article-card-info">
                    <Link to={`/story-view/${article.id}`}>
                        <h1 dangerouslySetInnerHTML={this.createMarkup(
                            trimmedBody(article.title)
                          )}>
                        
                        </h1>
                    </Link>
                        <p dangerouslySetInnerHTML={this.createMarkup(
                            trimmedBody(article.body)
                          )}/>
                        <p>
                        {article.author}
                        </p>
                        
                    <div className="archive-remove" onClick={() =>
                        this.props
                          .deleteFromReadingList(
                            this.props.user.id,
                            article.id
                          )
                          .then(response =>
                            this.props.getReadingList(this.props.user.id)
                          )
                      }>


                    <p >remove</p>
                    
                    </div>
                    </div>
                    <div style={{backgroundImage:`url(${article.thumbnailimg})`,backgroundSize:"cover"}} id="saved-article-image">
                        
                    </div>
                    
                </div>
                
            )
        })
        return(
            <div className="saved-article-list-view-main-div">
            <MainHeader/>
                <div className="saved-article-header-and-tabs">
                    <h1>Reading List</h1>
                    <div id="saved-archived">
                        <p>saved ({this.props.readingList.length})</p>
                        <p>archived (8)</p>

                    </div>
                    
                    <input defaultValue="Search Your Saved Stories" id="saved-article-search-input"/>       
                    
                </div>
                <div className="saved-article-content-div">
                    {readingListRender}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps,{ getReadingList, deleteFromReadingList})(SavedArticleListView);

