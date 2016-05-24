import React, { Component, PropTypes } from 'react';
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
    let sideColor = {
      position:'absolute',
      zIndex:-1,
      top:0,
      bottom:0,
      left:7,
      width:5,
      backgroundColor:this.props.color
    } ;
    let cardDetais = this.state.showDetails ?
                                                <div className="card__details">
                                                  <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                                                  <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={ this.props.taskCallbacks } />
                                                </div> : '';

    return(
      <div className="card">
        <div style={sideColor}></div>
        <div className={this.toggleClass.bind(this)()} onClick={this.showDetails.bind(this)} >{this.props.title}</div>
        {cardDetais}
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number,
  title:PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
}
export default Card;
