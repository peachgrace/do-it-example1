import React from 'react';

class NewCounter extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        this.increaseCount = this.increaseCount.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        const {count}= props;
        return {
            count, newCount : count === state.count ? state.newCount : count,
        };
    }

    increaseCount(){
        this.setState(({newCount})=> ({
            newCount : newCount + 1
        }));
    }
    render(){
        return (
            <div>
                현재 카운트 : {this.state.newCount}
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }

}
export default NewCounter;