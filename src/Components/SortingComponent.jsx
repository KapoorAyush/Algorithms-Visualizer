import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './SortingC.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
}
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    return arr;
}
class SortingComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            array:[],
            N:100
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange(event) {

        const target = event.target;
        const value = target.value;
        this.setState({N: value},() => {
            this.generateArray()
          }); 
    }
    componentDidMount() {
        this.generateArray();
        // this.setState({N:document.getElementById("N").value});
    }
    
    generateArray() {
        const array = [];

        for (let i = 0; i <this.state.N; i++) {
          array.push(Math.round(Math.random() * 1000));
        }
        this.setState({array:array});

    }
    async selectionSort(){
        const arrayBars = document.getElementsByClassName('array-bar');
        var arr=this.state.array;
        for (let i=0; i<this.state.N;i++){
            var min=i;
            for(let j=i+1;j<this.state.N;j++){
                arrayBars[i].style.backgroundColor="red";
                arrayBars[j].style.backgroundColor="cyan";
                let dele =await delay(1)
                if(arr[min]>arr[j]){
                    arrayBars[min].style.backgroundColor="black";
                    arrayBars[j].style.backgroundColor="gray";
                    min=j;
                }
                else
                    arrayBars[j].style.backgroundColor="black";
                this.setState({array:arr});
            }
            if(i!=min){
                arr=swap(arr,i,min)
                arrayBars[min].style.backgroundColor="black";
            }
            arrayBars[i].style.backgroundColor="green"
        }
        for (let item of arrayBars) {
            let dele =await delay(0.5)
            item.style.backgroundColor="black"
        }
    }

    async bubbleSort(){
        const arrayBars = document.getElementsByClassName('array-bar');
        var arr=this.state.array;
        for (let i=0; i<this.state.N;i++){
            for (let j=0; j<this.state.N-i-1;j++){
                arrayBars[j].style.backgroundColor="red";
                arrayBars[j+1].style.backgroundColor="red";
                let dele =await delay(5);
                if(arr[j]>arr[j+1]){
                    arrayBars[j].style.backgroundColor="cyan";
                    let dele =await delay(5);
                    arr=swap(arr,j,j+1);
                    this.setState({array:arr});
                }
                arrayBars[j].style.backgroundColor="black";
                arrayBars[j+1].style.backgroundColor="black";
            }
            arrayBars[this.state.N-i-1].style.backgroundColor="green"
        }
        for (let item of arrayBars) {
            let dele =await delay(0.5)
            item.style.backgroundColor="black"
        }
    }

    render(){
        return(
            <div> 
            <div>
                <input type="range" id="N" name="N" min="20" max="200" step="1" value={this.state.N} onChange={this.handleInputChange}/>
            </div>
            <div className="array-container">
            <button onClick={() => this.generateArray()}>Generate New Array</button>
            <a class="btn btn-dark" onClick={() => this.selectionSort()}>Selection Sort</a>
            <a class="btn btn-dark" onClick={() => this.bubbleSort()}>Bubble Sort</a>
            <br/>
            {this.state.array.map((val, i) => (
                <div className="array-bar" key={i}
                style={{
                    width: `${800/this.state.N}px`,
                    height: `${val*0.08}vh`,
                }}>
                </div>
            ))}



            </div>
            </div>

        );
    }
}

export default SortingComponent;