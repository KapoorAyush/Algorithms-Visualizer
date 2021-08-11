import { Component } from "react";
import SortingComponent from "./SortingComponent";
// import 'bootstrap/dist/css/bootstrap.css';
import { Switch,Link, Route, Redirect, withRouter } from 'react-router-dom'
class Home extends Component{
    render(){
        return(
        <div>
            <Link to="/SortingV">
                Sorting Visualizer
            </Link>
            <Switch>
                <Route path="/SortingV" component={SortingComponent} />
                {/* <Route exact path="/graphV" render={() => {window.location.href="https://kapoorayush.github.io/BFS-DFS-with-GUI/"}} /> */}
                {/* <Redirect to="/" /> */}
            </Switch>
            <br />
            <a href="https://kapoorayush.github.io/BFS-DFS-with-GUI/">Graph Algorithms</a>
        </div>

        );
    }
}
export default Home;