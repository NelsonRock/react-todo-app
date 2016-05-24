import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

let cardsList = [
    {
    id: 1,
    title: "Read the Book",
    description: "I should#ed604d read the whole book",
    color: "#ed604d",
    status: "in-progress",
    tasks: []
    },
    {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
    color: "#3dd1bf",
    status: "todo",
    tasks: [
      {
      id: 1,
      name: "ContactList Example",
      done: true
      },
      {
      id: 2,
      name: "Kanban Example",
      done: false
      },
      {
      id: 3,
      name: "My own experiments",
      done: false
      }
    ]
  },
];

ReactDOM  .render(<Board cards={ cardsList }/>, document.getElementById('root'));