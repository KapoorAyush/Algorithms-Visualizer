import React, {Component} from 'react';
import './SortingC.css';
function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
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
    async selectionSort(){
        const arrayBars = document.getElementsByClassName('array-bar');
        var arr=this.state.array;
        for (let i=0; i<100;i++){
            var min=i;
            for(let j=i+1;j<100;j++){
                if(arr[min]>arr[j]){
                    arrayBars[j].style.backgroundColor="cyan";
                    let dele =await delay(0.5)
                    let temp=arr[min];
                    arr[min]=arr[j];
                    arr[j]=temp;
                    arrayBars[j].style.backgroundColor="black";
                    arrayBars[min].style.backgroundColor="cyan";
                }
                this.setState({arr});
            }
            arrayBars[i].style.backgroundColor="green"
        }
        this.setState({arr});
    }
    render(){
        return(
            <div className="array-container">
            <button onClick={() => this.generateArray()}>Generate New Array</button>
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
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