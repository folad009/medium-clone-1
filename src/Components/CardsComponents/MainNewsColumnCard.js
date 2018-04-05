import React from 'react';

function NewsHomepageColumnCard(props){
    return(
        <div className="news-home-page-column-card-main-div">
            <div className="news-home-page-column-card-info">
                <h1>{props.articleTitle}</h1>
                <p>Using pytubes,numpy and other stuff</p>
                <p id="author-name">{`${props.articleAuthorFirstName} ${props.articleAuthorLastName}`}</p>
                <p id="time-stamp">{props.articleDate}</p>
            </div>
            <div  style={{height:"auto",width:"150px", backgroundImage:`url(${props.articleImg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
            </div>
        </div>
    )
}
export default NewsHomepageColumnCard;