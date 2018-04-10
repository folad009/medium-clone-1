import React from 'react';

function FromYourNetworkSmallCard(props){
    return(
        <div className="from-network-small-card-main-div">
               <div>
                    <img className="user-image"/>
                    <h4>
                    {props.articleTitle}
                    </h4>    
                </div>
                    <p>Apr 3rd</p>
        </div>  
    )
}
export default FromYourNetworkSmallCard;