import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      showDetails: false,
    }
  }

  showDetails(event){
    event.preventDefault();
    this.setState({showDetails: !this.state.showDetails})
  }

  render(){
    let cardDetais = this.state.showDetails ?
    <div className="card__details">
      {this.props.description}
      <CheckList cardId={this.props.id} tasks={this.props.tasks} />
    </div> : '';

    return(
      <div className="card">
        <div className="card__title" onClick={this.showDetails.bind(this)} >{this.props.title}</div>
        {cardDetais}
      </div>
    );
  }
}
export default Card;
