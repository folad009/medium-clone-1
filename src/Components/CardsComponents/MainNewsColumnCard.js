import React from 'react';
import BookmarkIcon from "react-icons/lib/io/android-bookmark"

function NewsHomepageColumnCard(props){
    function createMarkup(str) {
        return { __html: str };
      }

    return(
        <div className="news-home-page-column-card-main-div">
            <div className="news-home-page-column-card-info">
                <h1>{props.articleTitle}</h1>
                <p dangerouslySetInnerHTML={createMarkup(props.body)}></p>
                <p id="author-name">{`${props.articleAuthorFirstName} ${props.articleAuthorLastName}`}</p>
                <p id="time-stamp">{props.articleDate}</p>
            </div>
            <div id="save-icon-column-home">
                <BookmarkIcon onClick={() => props.addToReadingList(props.userid,props.articleId)} style={{height:'40px',width:'40px'}}/>
            </div>
            <div  style={{height:"auto",width:"150px", backgroundImage:`url(${props.articleImg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
            </div>
        </div>
    )
}
export default NewsHomepageColumnCard;
