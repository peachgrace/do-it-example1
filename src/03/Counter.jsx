import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount() {
        this.setState(
            ({count})=> (
            {count : count + 1}
        ) //객체 반환시 소괄호를 사용한다.!
        
        );
    }
render(){
    return (
    <div>
<span>카운트: {this.state.count}</span>
        <button onClick = {this.increaseCount}>카운트 증가</button>
        </div>
    )
}
}
export default Counter;