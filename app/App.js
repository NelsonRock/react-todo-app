import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import Board from './Board';
import Perf from 'react-addons-perf';
import 'whatwg-fetch';
import 'babel-polyfill';

window.Perf = Perf;
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

const API_URL = 'http://kanbanapi.pro-react.com',
      API_HEADERS = {
          'Content-Type' : 'application/json',
          Authorization: 'supernany' // if you local server is not needed
        };

// function fetchOpcion (method, cardId, taskId, newTask, nextState){
//   console.log('Methos:' + method);
//
//   switch (method) {
//     case 'delete':
//       fetch(API_URL +'/cards/' + cardId + '/tasks/'+ taskId , {
//         method: method,
//         headers: API_HEADERS
//       });
//       break;
//     case 'post':
//     fetch(API_URL +'/cards/' + cardId + '/tasks/', {
//           method: 'post',
//           headers: API_HEADERS,
//           body: JSON.stringify(newTask)
//           })
//           .then((response)=> response.json())
//           .then((responseData)=>{
//             newTask.id = responseData.id
//             this.setState({cards: nextState})
//           });
//       break;
//     default:
//
//   }
// }

class AppContainer extends Component {
  constructor() {
    super(...arguments);
    this.state= {
      cards:[]
    }
  }
  fetchOpcion (method, cardId, taskId, newTask, nextState, newDoneValue){
    let prevState = this.state;
    console.log('Methos:' + method);

    switch (method) {
      case 'delete':
        fetch(API_URL +'/cards/' + cardId + '/tasks/'+ taskId , {
          method: method,
          headers: API_HEADERS
        })
        .then((response)=>{
          if(!response.ok){
            throw new Error('Server Response is not ok!');
          }
        })
        .catch((error, response)=>{
          console.log(error, response);
          this.setState(prevState);
        });
        break;
      case 'post':
      fetch(API_URL +'/cards/' + cardId + '/tasks/', {
            method: method,
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
            })
            .then((response)=> {
              console.log(response);
              if(response.ok){
                return response.json();
              }
              else{
                throw new Error('Server Response is not ok!')
              }
            })
            .then((responseData)=>{
              console.log(responseData);
              newTask.id = responseData.id
              this.setState({cards: nextState})
            })
            .catch((error)=>{
              console.log(error);
              this.setState(prevState);
            });
        break;
        case 'put':
        fetch(API_URL +'/cards/' + cardId + '/tasks/'+ taskId , {
          method: method,
          headers: API_HEADERS,
          body: JSON.stringify({done: newDoneValue})
        })
        .then((response)=>{
          console.log(response);
          if (!response.ok) {
            throw new Error('Server Response is not ok');
          }
        })
        .catch((error)=>{
          console.log(error);
          this.setState(prevState);
        });
        break;
      default:

    }
  }
  addTask(cardId, taskName){
    console.log(cardId + ' ' + taskName);

    let cardIndex = this.state.cards.findIndex((card)=> card.id === cardId);

    let newTask = {id: Date.now(), name: taskName, done: false};
    console.log(newTask);

    let nextState = update(this.state.cards, {
                      [cardIndex]:{
                        tasks: { $push: [newTask]}
                      }
                    });

    this.fetchOpcion('post', cardId, taskName, newTask, nextState);
  }
  deleteTask(cardId, taskId, taskIndex){
    console.log(cardId + ' ' + taskId + ' ' + taskIndex );

    let cardIndex = this.state.cards.findIndex((card)=> card.id === cardId);

    let nextState = update(this.state.cards, {
                          [cardIndex]:{
                            tasks: { $splice: [[taskIndex, 1 ]]}
                          }
                        });
    // set the new state of cards
    this.setState({ cards: nextState });
    // fetch function
    this.fetchOpcion('delete', cardId, taskId);

  }
  toggleTask(cardId, taskId, taskIndex){
    console.log(cardId + ' ' + taskId + ' ' + taskIndex );
    // Find the index cards's state
    let cardIndex = this.state.cards.findIndex((card)=> card.id === cardId);
    // Create new value for done properties
    let newDoneValue;
    // with the $apply command you change the value to opposite
    let nextState = update(this.state.cards, {
                          [cardIndex]:{
                          tasks: {
                              [taskIndex]:{
                                done:{ $apply: (done) =>{
                                    newDoneValue = !done;
                                    return newDoneValue;
                                }
                              }
                            }
                          }
                        }
                      });
    console.log(newDoneValue);
    // set the new state of cards
    this.setState({cards:nextState});
    // fetch function
    this.fetchOpcion('put', cardId, taskId, newDoneValue);

  }
  componentDidMount(){
    console.log('before fetch:\n' + this.state.cards);
    fetch(API_URL + '/cards',
     {
       headers: API_HEADERS
     })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ cards: responseData});
    })
    .catch((error) =>{
      console.trace('Error fetching and parsing data' ,  error);
    });
    window.state = this.state;
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
