import React from 'react';

function FeaturedMediumCard(props){
    return(
        <div className="featured-medium-card-main-div">
           <div>
                <img src={props.articleImage} style={{width:'80%'}}/>
                <h2>{props.articleTitle}</h2>
                <h5></h5>
                <p>{props.articleAuthor}</p>
            </div>
        </div>
    )
}
export default FeaturedMediumCard;