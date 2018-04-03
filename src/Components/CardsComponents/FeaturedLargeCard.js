import React from 'react';

function FeaturedLargeCard(){
    return(
        <div className="featured-large-card-main-div">
           <div>
           <h2>Title</h2>
           <h5>Description</h5>
           <p>author</p>
           </div>
           <div>
            <img src="https://cdn-images-1.medium.com/max/2000/1*LbigetrtuphAcAFY0NxLQw.jpeg" style={{width:'100%'}}/>
           </div>
        </div>
    )
}
export default FeaturedLargeCard;