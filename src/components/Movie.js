import React,{ Component } from 'react'
 import {Route} from 'react-router-dom';
import MovieList from './movieList';
import SearchRating from './searchRating';
import './Movie.css';
import MovieShow from './movies';


export default class MOVIE extends Component {
    constructor(props) {
      super(props)
      this.state = {
        movieadded: props.movies,
        match: props.match,
        picture: '',
        title: '',
        date: '',
        rating: '',
        searchText: '',
        stars: 0
      }
    }    
    changeInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    newMovie = () => {
      this.setState({
        movieadded: [
          ...this.state.movieadded,
          {
            picture: this.state.picture,
            title: this.state.title,
            date: this.state.date,
            rating: this.state.rating
          }],
      })
    }
    searchMovie = (e) => {
      this.setState({
        searchText: e.target.value
      })
    }
    rater = (clicked) => {
      this.setState({
        stars: clicked
      })
    }
    render() {
      return (
        <div to="/" className="wrapper">
          <header>
          <div className="Logo">
            <h1> MOVIE</h1>
           </div>
           <nav className="main-nav">
           <a href="#home">Home</a>
           <a href="#tvShows">Films</a>
           <a href="#originals">Arabe</a>
           <a href="#kids">Kids</a>
           </nav>
           <p className="search-title">
               <input placeholder="search film, series ..." className="search" onChange={this.searchMovie}/>
           </p>
           <SearchRating rate={this.state.stars} starClicked={this.rater} />
           <nav className="sub-nav">
           </nav>
          </header>
          <section className="main-container" >
          <div className="list">
          <MovieList list={this.state.movieadded.filter(movie => movie.rating >= this.state.stars).filter(el => el.title.toLowerCase().includes(this.state.searchText.toLowerCase()))} change={this.changeInput} new={this.newMovie} rating={this.state.rating} />
          <Route path={`${this.state.match.url}/:movietitle`} render={routerProps => <MovieShow  {...routerProps} movies={this.state.movieadded} /> }/>
          </div>
         </section>
         <footer>
       <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
              <br/> <a href="#">Wassim Mokhtar</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
      </footer>
          </div>
      )}
  }