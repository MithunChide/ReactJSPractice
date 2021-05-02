import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Popup from "../components/Popup";
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      robots : [],
      searchfield : '',
      Popup: false
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
  }

  async componentDidMount(){
    console.log("inside component did mount!");
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      return response.json();
    })
    .then((users) => {
      this.setState({robots:users});
    })

    console.log("After Stteing State");
  }

  openPopup = () => {
    this.setState({popup:true});
  }

  closePopup = () => {
    this.setState({popup:false});
  }


  render(){
    // const {robots,searchfield} = this.state;
    console.log("Render runned");
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return !filteredRobots.length ? <h1>Loading.....</h1>:

    (
      <React.Fragment>
      {this.state.popup ? <Popup closePopup = {this.closePopup}/> : ""}
      <div className="tc">
        <h1>Robofans</h1>{/*You need to change this message when no robots name matches! */}
        <button onClick={this.openPopup}>Open Popup</button>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
      </React.Fragment>
    )
  }
  
}
// constructor(){
//   super();
//   this.state = {
//     name : "Mithun",
//   }
//   console.log("inside Constructor");
// }
// componentWillMount(){
//   console.log("inside Component will mount!");
//   setTimeout(() => {
//     this.setState({name :"Akash will"});
//   },2000)
// }

// componentDidMount(){
//   console.log("inside component did mount!");
//   setTimeout(() => {
//     this.setState({name:"Hanuman did"});
//   },3000)
// }

// render(){
//   console.log("Render Runned");
//   return(
//       <h1>Hello World this is {this.state.name}</h1>

//   )
// }
// }


export default App;