import React,{Component} from 'react';


export default class Rating extends Component {
    render() {
      return (
        <div>
          <a href='#'className="rating">{'★'.repeat(this.props.movieRating).padEnd(5,'☆')}</a>
        </div>
      )}; }