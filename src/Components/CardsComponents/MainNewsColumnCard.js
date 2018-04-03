import React from 'react';

function NewsHomepageColumnCard(props){
    return(
        <div className="news-home-page-column-card-main-div">
            <div className="news-home-page-column-card-info">
                <h1>{props.articleTitle}</h1>
                <p>Using pytubes,numpy and other stuff</p>
                <p>{`${props.articleFirstName} ${props.articleLastName}`}</p>
                <p>{props.articleDate}</p>
            </div>
            <div>
                <img src={props.articleImg} className="news-home-page-column-card-image"/>
            </div>
        </div>
    )
}
export default NewsHomepageColumnCard;