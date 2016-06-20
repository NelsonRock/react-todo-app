import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimateList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      items:[
        {id: 1, name: 'Nelson'},
        {id: 2, name: 'Noah' },
        {id: 3, name: 'Jose' }
        ]
      }
  }
  handleChange(evt){
    if(evt.key === 'Enter' || evt.key === 13 ){
      // create new items, set time as it's id
      let newItem = {id: Date.now(), name: evt.target.value };
      // new state newsItems
      let newsItems = this.state.items.concat(newItem);
      //' ' target
      evt.target.value = '';
      //setState newsItems
      this.setState({items: newsItems});
    }
  }

  handleRemove(evt, i){
    let newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render(){
    let items = this.state.items.map((item, i)=> (
          <div key={item.id}
            className="item"
            onClick={this.handleRemove.bind(this, i)}
           >{item.name}
         </div>
    ));
    return(
      <div>
           <ReactCSSTransitionGroup
               transitionName="example"
               transitionEnterTimeout={300}
               transitionLeaveTimeout={300}
               transitionAppear={true}
               transitionAppearTimeout={300}
               >
             {items}
           </ReactCSSTransitionGroup>
        <input type="text" onKeyPress={this.handleChange.bind(this)} />
      </div>
    );
  }
}

render(<AnimateList />, document.getElementById('root'));
