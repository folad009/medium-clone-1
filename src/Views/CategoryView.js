import React,{Component} from 'react';
import MainHeader from '../Components/HeaderComponents/MainHeader';
import CategoryCard from '../Components/CardsComponents/CategoryCard';

class CategoryView extends Component{
    render(){
        return(
            <div className="category-view-main-container">
                <MainHeader/> 
                <div className="category-view-title-follow">
                    <div>
                    <h1>Culture</h1>
                    <h4>High,Low,and sideways.</h4>
                    </div>
                    <div>
                    <button>Follow</button>
                    </div>
                </div>
                <div className="related-topics">
                    <h6>Related topics</h6>
                    <h6>Creativity,Media,Music,Film,Art</h6>
                </div>
                <div className="for-you-render">
                    <h3 id="for-you-text">For You</h3>
                    <CategoryCard/>
                    {/* map for article category list goes here*/}
                </div>
            </div>
        )
    }
}
export default CategoryView;