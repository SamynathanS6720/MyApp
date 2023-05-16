import React, {Component} from 'react';

export class ClickComp extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 1
        };
    }

    UpdateClick=()=>{
        this.setState({ count: this.state.count + this.state.count * this.state.count});
    };

    render(){
        const { count } = this.state;
        return(
            <div>
                <button onClick={this.UpdateClick}>Click {count} </button>
            </div>
        );
    }
}

export default ClickComp;