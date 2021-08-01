// import React, {Component} from 'react'; 
// function delay(delayInms) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(2);
//       }, delayInms);
//     });
// }
// class SelectionSort extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             array:props.arr,
//             N:props.N
//         }
//     }

//     async selectionSim(){
//         const arrayBars = document.getElementsByClassName('array-bar');
//         var arr=this.state.array;
//         console.log(arr);
//         console.log(this.state.N);
//         for (let i=0; i<this.state.N;i++){
//             var min=i;
//             for(let j=i+1;j<this.state.N;j++){
//                 arrayBars[i].style.backgroundColor="red";
//                 arrayBars[j].style.backgroundColor="cyan";
//                 let dele =await delay(1);
//                 if(arr[min]>arr[j]){
//                     arrayBars[min].style.backgroundColor="black";
//                     arrayBars[j].style.backgroundColor="gray";
//                     min=j;
//                 }
//                 else
//                     arrayBars[j].style.backgroundColor="black";
//                 this.setState({array:arr});
//             }
//             if(i!=min){
//                 let temp=arr[i];
//                 arr[i]=arr[min];
//                 arr[min]=temp;
//                 arrayBars[min].style.backgroundColor="black";
//             }
//             arrayBars[i].style.backgroundColor="green";
//         }
//         for (let item of arrayBars) {
//             let dele =await delay(0.5);
//             item.style.backgroundColor="black";
//         }

//     }

//     render(){
//         this.selectionSim()
//         return(
//             <div></div>
//         ) ;
//     }
// }
// export default SelectionSort;