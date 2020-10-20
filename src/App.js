import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import MOVIE from './components/Movie.js';
import MovieShow from './components/movies';
import picture1 from './image/img1.jpg';
import picture2 from './image/img2.jpg';
import picture3 from './image/img3.jpg';
import picture4 from './image/img4.jpg';
import picture5 from './image/img5.jpg';
import picture6 from './image/img6.jpg';
import picture7 from './image/img7.jpg';
import picture8 from './image/img8.jpg';
//import MovieList from "./components/movieList";

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      movies : [
         {
           picture: picture1 ,
           title: 'THE GODFATHER',
           date: '1979',
           rating: 4,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=mPKVbh6LySs",
         },
         {
           picture: picture2 ,
           title: 'IP MAN',
           date: '1989',
           rating: 5,
           description: "Ip Man, also known as Yip Man, (Chinese: 葉問; 1 October 1893 – 2 December 1972) was a Hong Kong martial artist and a grandmaster of the martial art Wing Chun. He had several students who later became martial arts masters in their own right, the most famous among them being Bruce Lee. Martial art: Wing Chun, Kung Fu  Films: The Legend Is Born: Ip Man, The Grand... Parents: Yip Oi-dor, Ng Shui, Leung Jan, Ip Sibling: Ip Kai-gak, Ip Wan-mei, Ip Wan-hum.",
           trailer: "https://www.youtube.com/watch?v=UvKKs1qcbYs",
         },
         {
           picture: picture3 ,
           title: 'اللمبي 8 جيجا',
           date: '2012',
           rating: 4,
           description: "El-Limby Arabic: اللمبي‎ is an Egyptian comedy movie that hit the theaters in 2002, starring the stars of Arabic cinema Mohamed Saad that played the role of a husband called El-Limby, Hasan Hosni, Hala Shiha, and Abla Kamel. The movie El-Limby is considered to be a major hit in Arabic cinema as it influenced the demand for Arabic movies and made the people want more movies like it.",
           trailer: "https://www.youtube.com/watch?v=Yu4u7f9muSw",
         },
         {
           picture: picture4 ,
           title: 'COMDY KIDS',
           date: '1998',
           rating: 5,
           description: "2 Malaysian animated films make waves at the Asian Academy Creative Awards.",
           trailer: "https://www.youtube.com/watch?v=4fEQi9iJgjY",
         },
         {
           picture: picture5 ,
           title: 'HOMA ALONE',
           date: '1996',
           rating: 3,
           description: "The film follows Kevin (Culkin), an eight-year-old boy, who must defend his home from two burglars, Harry and Marv (Pesci and Stern), after his family accidentally leaves him behind on their Christmas vacation. It was filmed between February and May 1990 in a variety of locations throughout Illinois.",
           trailer: "https://www.youtube.com/watch?v=dmze6lF9iu0",
         },
         {
           picture: picture6 ,
           title: 'WARRIOR',
           date: '2014',
           rating: 1,
           description: "It stars Tom Hardy and Joel Edgerton as two estranged brothers whose entrance into a mixed martial arts tournament makes them come to terms with their lives and each other, and Nick Nolte as their alcoholic father; Jennifer Morrison and Frank Grillo also star.",
           trailer: "https://www.youtube.com/watch?v=Rs6B3uXXllI",
         },
         {
           picture: picture7 ,
           title: 'BOYKA UNDISPUTD',
           date: '2010',
           rating: 5,
           description: "Undisputed: How Scott Adkins Saved The Franchise The Undisputed series stars martial arts icon Scott Adkins as Yuri Boyka, who first appears in the sequel Undisputed 2: Last Man Standing..",
           trailer: "https://www.youtube.com/watch?v=SbI_04n3lLU",
         },
         {
           picture: picture8 ,
           title: 'FAST & FURIOUS',
           date: '2006',
           rating: 4,
           description: "Fast & Furious (originally The Fast and the Furious) is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists and spies. The franchise also includes short films, a television series, live shows, video games and theme park attractions.",
           trailer: "https://www.youtube.com/watch?v=XskpZiITrNI",
         },
        ]
     };
  }

  render() {
    return (
      <Switch>
          <Route exact path="/" render={(props)=><MOVIE {...props} movies={this.state.movies}/>} />
          <Route exact path="/movies/:title" render={(props)=><MovieShow {...props} movies={this.state.movies}/>} />
      </Switch>
    );
  }
}

export default App;


