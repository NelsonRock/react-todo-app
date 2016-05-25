import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import 'whatwg-fetch';

// let cardsList = [
//   {
//     id: 1,
//     title: "Read the Book",
//     description: "I should#ed604d read the whole book",
//     color: "#ed604d",
//     status: "in-progress",
//     tasks: []
//   },
//   {
//     id: 2,
//     title: "Write some code",
//     description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
//     color: "#3dd1bf",
//     status: "todo",
//     tasks: [
//       {
//         id: 1,
//         name: "ContactList Example",
//         done: true
//       },
//       {
//         id: 2,
//         name: "Kanban Example",
//         done: false
//       },
//       {
//         id: 3,
//         name: "My own experiments",
//         done: false
//       }
//     ]
//   },
// ];

const API_URL = 'http://kanbanapi.pro-react.com/',
      API_HEADERS = {
          'Content-Type' : 'application/json',
          Authorization: 'super' // if you local server is not needed
        };

class AppContainer extends Component {
  constructor() {
    super();
    this.state= {
      cards:[]
    }
  }
  addTask(carId, taskName){

  }
  deleteTask(carId, taskId, taskIndex){

  }
  toggleTask(carId, taskId, taskIndex){

  }
  componentDidMount(){
    fetch(API_URL + 'cards', {headers: API_HEADERS})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({cards: responseData});
    })
    .catch((error) =>{
      console.trace("Error fetching and parsing data" ,  error);
    });
  }
  render(){
    return(
      <Board cards={this.state.cards}
              taskCallbacks={{
                            toggle: this.toggleTask.bind(this),
                            delete: this.deleteTask.bind(this),
                            add: this.addTask.bind(this),
                          }}/>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));
