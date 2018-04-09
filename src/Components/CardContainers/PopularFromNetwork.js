import React,{Component} from 'react';
import FromYourNetworkSmallCard from '../CardsComponents/FromYourNetworkCard';
import {connect} from 'react-redux';
import {getReadingList} from '../../ducks/reducer';

class PopularFromNetWorkContainer extends Component{
    componentDidMount(){
        this.props.getReadingList(this.props.user.id).then(response => {
            console.log("this is the list",this.props.readingList)
        })
        
    }
    render(){
        const savedList = (!this.props.readingList) ? "Loading..." : this.props.readingList.map((article,i)=>{
            return <FromYourNetworkSmallCard key={i} articleTitle={article.title}/>
        })

        
        return(
            <div className="popular-network-container-main-div">
                {savedList}
                
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps,{getReadingList})(PopularFromNetWorkContainer);