import React, { Component } from 'react';
import CheckList from './CheckList';
import marked from 'marked'; //render dynamic html


class Card extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      showDetails: false,
    }
  }

  showDetails(event){
    event.preventDefault();
    this.setState({showDetails: !this.state.showDetails});
  }

  toggleClass(){
    return !this.state.showDetails ? "card__title" : "card__title--is-open";
  }

  render(){
    let cardDetais = this.state.showDetails ?
                                                <div className="card__details">
                                                  <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                                                  <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                                                </div> : '';

    return(
      <div className="card">
        <div className={this.toggleClass.bind(this)()} onClick={this.showDetails.bind(this)} >{this.props.title}</div>
        {cardDetais}
      </div>
    );
  }
}
export default Card;
