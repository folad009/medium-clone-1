import React from 'react';

function FeaturedSmallCard(props){
    return(
        <div className="featured-small-card-main-div">
                <h4>
                {props.articleTitle}
                </h4>
                <p>
                {props.articleAuthor}
                </p>    
            
        </div>  
    )
}
export default FeaturedSmallCard;