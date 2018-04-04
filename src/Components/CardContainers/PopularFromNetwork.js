import React,{Component} from 'react';
import FromYourNetworkSmallCard from '../CardsComponents/FromYourNetworkCard';

class PopularFromNetWorkContainer extends Component{
    render(){
        return(
            <div className="popular-network-container-main-div">
                <FromYourNetworkSmallCard />
                <FromYourNetworkSmallCard/>
                <FromYourNetworkSmallCard/>
            </div>
        )
    }
}
export default PopularFromNetWorkContainer;