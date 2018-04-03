import React from 'react';
import FeaturedLargeCard from '../CardsComponents/FeaturedLargeCard';
import FeaturedMediumCard from '../CardsComponents/FeaturedMediumCard';
import FeaturedSmallCard from '../CardsComponents/FeaturedSmallCard';

function FeaturedComponent(){
    return(
        <div className="featured-component-main-div">
            <FeaturedLargeCard/>
            <FeaturedMediumCard/>
            <FeaturedSmallCard/>
        </div>
    )
}
export default FeaturedComponent;