import React,{Component} from 'react';
import FeaturedMediumCard from '../CardsComponents/FeaturedMediumCard';

 class MediumCardContainer extends Component{

    render(){
        return(
        <div className="medium-card-container-main-div">
            <FeaturedMediumCard articleTitle="I Like My Steak Lab-Grown, Not-Grass Fed" articleImage="https://cdn-images-1.medium.com/max/2000/1*UTCZMIQdhZQjmo22AI9sNw.jpeg" articleAuthor="angus hervey" />
            <FeaturedMediumCard articleTitle="Author Bear Bergman on surviving an adolescence where he never fit in" articleImage="https://cdn-images-1.medium.com/max/1000/1*e5flIoQf_jfcYYoSD0MkyA.jpeg" articleAuthor="Juan P"/>
            <FeaturedMediumCard articleTitle="If We Remember How Unity Feels, We Can Save..." articleAuthor="Matt Barnes" articleImage="https://cdn-images-1.medium.com/max/2000/1*Nubb8PFT2fttcXpAOm2d7w.png" />
        </div>
    )}
}

export default MediumCardContainer;