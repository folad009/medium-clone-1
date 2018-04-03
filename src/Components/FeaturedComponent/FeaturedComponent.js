import React from 'react';
import FeaturedLargeCard from '../CardsComponents/FeaturedLargeCard';
import FeaturedMediumCard from '../CardsComponents/FeaturedMediumCard';
import FeaturedSmallCard from '../CardsComponents/FeaturedSmallCard';
import MediumCardContainer from '../CardContainers/MediumContainer';
import SmallCardContainer from '../CardContainers/SmallCardContainer';

function FeaturedComponent(){
    return(
        <div className="featured-component-main-div">
            <FeaturedLargeCard/>
            <div className="featured-component-right-div">
                <MediumCardContainer/>
                <SmallCardContainer/>
            </div>
        </div>
    )
}
export default FeaturedComponent;