import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from "react-player";
//import Rating from './rating';
import './Movie.css';

const MovieShow = ({movies}) => {
  const {title} = useParams();
  var movie = movies.find(p => p.title === title);
  var movieTrailer;
  if (movie)
  movieTrailer = (
     
          <ReactPlayer url={movie.trailer} controls/>
    
  );
         else movieTrailer = (<h2> Sorry. Movie doesn't exist </h2>) ;
      return (
        <div to="/" class="wrapper">
        <header>
        <div className="Logo">
        <a href="#home"><h1>MOVIE</h1></a>
        </div>
         <nav className="main-nav">
         <Link to="/">Home</Link>
         <a href="#films">Films</a>
         <a href="#arabe">Arabe</a>
         <a href="kids">Kids</a>
         </nav>
         <p className="search-title">
               <input placeholder="search film, series ..." className="search"/>   
           </p>
           <div>
             <a href="#" class="rating"> 
            <span>☆</span> <span>☆</span><span>☆</span><span>☆</span><span>☆</span>
           </a>
           </div>
        </header>
        <section className="main-container">
        <p className="copyright-text">{movie.description}</p>
        <br/>
        {movieTrailer}
        </section>
        <footer>
        <div className="container" style={{marginBottom:"100"}}>
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
            <br/>  <a href="#" >Wassim Mokhtar</a>.
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
    );
  }

export default MovieShow;
