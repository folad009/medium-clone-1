import React from 'react';

function FeaturedMediumCard(props){
    
    return(
        <div className="featured-medium-card-main-div">
           <div>
                
                <div style={{width:'240px',height:'104px',backgroundImage:`url(${props.articleImage})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
                <div className="featured-medium-card-info">    
                <h2>{props.articleTitle}</h2>
                <h5></h5>
                <p>{props.articleAuthor}</p>
                </div>
            </div>
        </div>
    )
}
export default FeaturedMediumCard;