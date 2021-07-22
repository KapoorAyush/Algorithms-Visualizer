import React, {Component} from 'react';
import './SortingC.css';
class SortingComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            array:[]
        }
    }
    componentDidMount() {
        this.generateArray();
    }
    
    generateArray() {
        const array = [];
        for (let i = 0; i <100; i++) {
          array.push(Math.round(Math.random() * 1000));
        }
        this.setState({array});
    }
    
    render(){
        return(
            <div className="array-container">
            <button onClick={() => this.generateArray()}>Generate New Array</button>
            <br/>
            {this.state.array.map((val, i) => (
                <div className="array-bar" key={i}
                style={{
                height: `${val*0.08}vh`,
                }}>
                </div>
            ))}
            </div>
        );
    }
}

export default SortingComponent;