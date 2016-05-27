import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import 'whatwg-fetch';
import 'babel-polyfill';

// let cardsList = [
//   {
//     id: 1,
//     title: 'Read the Book',
//     description: 'I should#ed604d read the whole book',
//     color: '#ed604d',
//     status: 'in-progress',
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
//         done: false
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
          Authorization: 'supernany' // if you local server is not needed
        };

class AppContainer extends Component {
  constructor() {
    super(...arguments);
    this.state= {
      cards:[]
    }
  }
  addTask(cardId, taskName){

  }
  deleteTask(cardId, taskId, taskIndex){
    const cardIndex = this.state.cards.map((d)=>{
        d.id == cardId;
       console.log('card.id='+ cardId + '\n from taskId:'+ taskId + " taskIndex:" + taskIndex);
     });
  }
  toggleTask(carId, taskId, taskIndex){

  }
  componentDidMount(){
    console.log('before fetch:\n' + this.state.cards);
    fetch(API_URL + 'cards',
     {
       headers: API_HEADERS,
     })
    .then((response) => response.json())
    .then((responseData) => {
      let data = responseData;
      this.setState({ cards: responseData});
      console.log('after fetch:\n' + this.state.cards[0].id + '\n' + data[0].id);
    })
    .catch((error) =>{
      console.trace('Error fetching and parsing data' ,  error);
    });

  }
  render(){
    return(
      <Board cards={this.state.cards}
              taskCallbacks={{
                            toggle: this.toggleTask.bind(this),
                            delete: this.deleteTask.bind(this),
                            add: this.addTask.bind(this)
                          }} />
    )
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));
