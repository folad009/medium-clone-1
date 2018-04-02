import React , {Component} from 'react';

class InputBodyComponent extends Component{
    render(){
        return(
            <div className="input-body-component-main-div">
                <div className="input-body-component-user-info"></div>
                <input defaultValue="Title" type="text" className="input-body-component-title"/>
                <textarea defaultValue="tell your story..." type="body" className="text-area-body-component-body"/>
            </div>
        )
    }
}
export default InputBodyComponent;