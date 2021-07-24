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
                let temp=arr[i];
                arr[i]=arr[min];
                arr[min]=temp;
                arrayBars[min].style.backgroundColor="black";
            }
            arrayBars[i].style.backgroundColor="green"
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
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
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