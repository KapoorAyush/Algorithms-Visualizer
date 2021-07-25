import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './SortingC.css';
import SelectionSort from './SelectionSort';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { Link } from 'react-router-dom';

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


    render(){
        return(
            <div> 
            <div>
                <input type="range" id="N" name="N" min="20" max="200" step="1" value={this.state.N} onChange={this.handleInputChange}/>
            </div>
            <div className="array-container">
            <button onClick={() => this.generateArray()}>Generate New Array</button>
            <Link class="btn btn-dark" to='/selectionSort'>Selection Sort</Link>
            <br/>
            {this.state.array.map((val, i) => (
                <div className="array-bar" key={i}
                style={{
                    width: `${800/this.state.N}px`,
                    height: `${val*0.08}vh`,
                }}>
                </div>
            ))}

            <Switch>
                <Route path="/selectionSort" component={()=> <SelectionSort arr={this.state.array} N={this.state.N}/>} />
                {/* <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} /> } /> */}
                
                <Redirect to="/" />
            </Switch>

            </div>
            </div>

        );
    }
}

export default SortingComponent;