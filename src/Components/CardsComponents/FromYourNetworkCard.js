import React from 'react';

function FromYourNetworkSmallCard(props){
    function createMarkup(str) {
        return { __html: str };
      }
      


    return(
        <div className="from-network-small-card-main-div">
              <img className="user-image"/> 
              <div className="user-info-from-network">
                    <h4 dangerouslySetInnerHTML={createMarkup(props.articleTitle)}>
                    </h4> 
                    <p>Apr 3rd</p>   
                </div>
                    
        </div>  
    )
}
export default FromYourNetworkSmallCard;