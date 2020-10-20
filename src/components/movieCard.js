import React, { Component } from 'react';
import './Movie.css';
import Rating from './rating'

export default class MovieCard extends Component {
 
    render() {
        return (
        <div className="card">
            <Rating movieRating={this.props.movie.rating}/>
            <img src={this.props.movie.picture} alt={this.props.movie.title} height='250' className="picture"/>
            <p className="title">{this.props.movie.title}</p>
            <h4 className="date">{this.props.movie.date}</h4>  
    </div>    
    )
  }
}