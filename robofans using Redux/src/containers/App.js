import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import {connect} from "react-redux";
import Scroll from '../components/Scroll';
import Popup from '../components/Popup';
import ErrorBoundary from '../components/ErrorBoundary';
import "./App.css";
import { setSearchField } from '../actions';
import { requestRobots } from '../reducers';


const mapStateToProps = state =>{
    return{
        searchfield: state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error,

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () =>dispatch(requestRobots())
    }
}

class App extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         popup: false
    //     }

    //     // console.log("Constructor!")
    // }

         

    async componentDidMount() {
        // console.log(this.props.store.getState())

        // // console.log("Inside will");

        // await fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(users => {
        //         this.setState({ robots: users });
        //     })
        this.props.onRequestRobots();
        // console.log("After setting state!");
    }

    // openPopup = () => {
    //     this.setState({ popup: true });
    // }

    // closePopup = () => {
    //     this.setState({ popup: false });
    // }


    render() {
        // const { robots } = this.state;
        console.log(this.props)
        const {searchField,onSearchChange,robots,isPending} = this.props;
        console.log("Render runned");
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ?
            <h1> Loading....... </h1>  :
            (
               <React.Fragment > 
                   
                    <div className = "tc" >
                    <h1> Robofans </h1>{/ * You need to change this message when no robots name matches! * /} 
                
                    <ErrorBoundary >
                    <SearchBox searchChange = {onSearchChange }/> 
                    </ErrorBoundary >

                    <Scroll >
                    <ErrorBoundary >
                    <CardList robots = { filteredRobots }/>
                    </ErrorBoundary >

                    </Scroll> 
                    </div>
                     </React.Fragment>
                )
            }
    }

    // class App extends Component{
    //   constructor(){
    //     super();
    //     this.state = {
    //       name:"Tirth"
    //     }
    //     console.log("Inside Constructor!");
    //   }

    //   componentWillMount(){
    //     console.log("Inside component will mount!");
    //     setTimeout(() => {
    //       await this.setState({name : "Arafat will"});
    //       console.log("Inside setTimeout");
    //     },3000)
    //     console.log("I WILL 2");
    //   }

    //   componentDidMount(){
    //     console.log("Inside component did mount!");
    //     setTimeout(() => {
    //       this.setState({name : "Rekha did"});
    //     },1000)
    //   }

    //   render(){
    //     console.log("Inside Render!");
    //     return (
    //       <h1>Hello world this is {this.state.name}</h1>
    //     )
    //   }
    // }


    export default connect(mapStateToProps,mapDispatchToProps)(App);