import React,{Component} from 'react';
import MainHeader from '../Components/HeaderComponents/MainHeader';

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
                    <h3></h3>
                </div>
            </div>
        )
    }
}
export default CategoryView;