import React,{Component} from 'react';
import FeaturedSmallCard from '../CardsComponents/FeaturedSmallCard';

class SmallCardContainer extends Component{
    render(){
        return(
            <div className="small-card-container">
                <FeaturedSmallCard articleTitle="The Immigrant Ancestors Ann Coulter Wishes She Didn’t Have" articleAuthor="Megan Smolenyak"/>
                <FeaturedSmallCard articleTitle="I Didn’t See a Thing — What Magicians Can Teach Us About the Science of Attention" articleAuthor="Megan Smolenyak"/>
                <FeaturedSmallCard articleTitle="What We Know About Autonomous Vehicles" articleAuthor="Carl Anderson"/>
            </div>
        )
    }
}
export default SmallCardContainer;