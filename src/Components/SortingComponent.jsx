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
            N:50
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

    
    async mergeSort(arr,l,r){
        const arrayBars = document.getElementsByClassName('array-bar');
        var n=arr.length;
        if(n>1){
            if(l>=r){
                return;
            }
            var m =l+ parseInt((r-l)/2);
            arrayBars[m].style.backgroundColor="cyan";
            // let dele =await delay(0.5);
            this.mergeSort(arr,l,m);
            this.mergeSort(arr,m+1,r);
            this.merge(arr,l,m,r);
            arrayBars[m].style.backgroundColor="black";
        }    
    }

    async merge(arr, l, m, r)
    {
        let dele =await delay(100);
        var n1 = m - l + 1;
        var n2 = r - m;
    
        // Create temp arrays
        var L = new Array(n1);
        var R = new Array(n2);
    
        // Copy data to temp arrays L[] and R[]
        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
    
        // Merge the temp arrays back into arr[l..r]
    
        // Initial index of first subarray
        var i = 0;
    
        // Initial index of second subarray
        var j = 0;
    
        // Initial index of merged subarray
        var k = l;
    
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            // let dele =await delay(0.5);
            this.setState({array:arr});
            k++;
        }
    
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
            // let dele =await delay(0.5);
            this.setState({array:arr});
        }
    
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
            // let dele =await delay(0.5);
            this.setState({array:arr});
        }
    }

    async insertionSort(){
        const arrayBars = document.getElementsByClassName('array-bar');
        var arr=this.state.array;
        var n=this.state.N;
        for(var i=1;i<n;i++){
            var ti=i;
            for(var j=ti-1;j>=0;j--){
                arrayBars[ti].style.backgroundColor="cyan";
                let dele =await delay(10);
                if(arr[ti]<arr[j]){
                    arr=swap(arr,ti,j);
                    arrayBars[ti].style.backgroundColor="black";
                    ti=j;
                    arrayBars[ti].style.backgroundColor="black";
                    this.setState({array:arr});
                }
                else   
                    break;
            }
            arrayBars[ti].style.backgroundColor="black";
        }
    }

    render(){
        return(
            <div> 
            <div>
                <button class="btn btn-primary mx-2" onClick={() => this.generateArray()}>Generate New Array</button>
                <input type="range" id="N" name="N" min="20" max="200" step="1" value={this.state.N} onChange={this.handleInputChange}/>
            
            </div>
            <div className="array-container">

            <a class="btn btn-dark m-2" onClick={() => this.selectionSort()}>Selection Sort</a>
            <a class="btn btn-dark m-2" onClick={() => this.bubbleSort()}>Bubble Sort</a>
            <a class="btn btn-dark m-2" onClick={() => this.mergeSort(this.state.array,0,this.state.N-1)}>Merge Sort</a>
            <a class="btn btn-dark m-2" onClick={() => this.insertionSort()}>Insertion Sort</a>          
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