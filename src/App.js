import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import Filter from './Filter';
import Photo1 from "../src/photo1.jpg"
import Photo2 from "../src/photo2.jpg"
import Photo3 from "../src/photo3.jpg"
import Photo4 from "../src/photo4.jpg"
import { useState } from 'react';
import Description from "./Description"
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const objMovies=[
    { id:1, title:"Heredite", describe:"C'est un film d'horreur. ", img:Photo1, rate:3, link:<iframe width="727" height="409" src="https://www.youtube.com/embed/vntI9lAQyyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
    { id:2, title:"Turning", describe:"C'est un film d'horreur.", img:Photo2, rate:2, link:<iframe width="727" height="409" src="https://www.youtube.com/embed/yuGSAjRZ668" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
    { id:3, title:"Le calendrier", describe:"C'est un film d'horreur.", img:Photo3, rate:4, link:<iframe width="727" height="409" src="https://www.youtube.com/embed/YPWzmevcvws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
    { id:4, title:"Scary stories", describe:"C'est un film d'horreur.", img:Photo4 , rate:1, link:<iframe width="727" height="409" src="https://www.youtube.com/embed/UsYPpXLbE08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
    { id:5, title:"A", describe:"C'est un film d'horreur.", img:Photo4 , rate:4, link:<iframe width="727" height="409" src="https://www.youtube.com/embed/UsYPpXLbE08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
    { id:6, title:"B", describe:"C'est un film d'horreur.", img:Photo4 , rate:5, link:<iframe width="727" height="409" src="https://www.youtube.com/embed/UsYPpXLbE08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},

  ]
  const [filtredFilms, setFiltredFilms] = useState(objMovies)

  const handelChange=(item)=>{
  let filter = objMovies.filter((val)=>val.title.toLowerCase().includes(item.toLowerCase()));
  console.log(filter)
  setFiltredFilms(filter)
  }
  
  const ratingChanged = (newRating) => {
  console.log(newRating)
  let filter = objMovies.filter((val)=> val.rate === newRating);
  console.log(filter)
  
  setFiltredFilms(filter)
  }

  return (
  <div className="App">
  <BrowserRouter>
  <Filter changeFn={handelChange} ratingFilter={ratingChanged}/>
  <Switch>
    <Route exact path="/">
    <MovieList obj={filtredFilms}/>
    </Route>
    <Route path="/description/:id" render={ (props) => <Description data= {objMovies} {...props} />}/>
  </Switch>
  </BrowserRouter>
  </div>
  );
}
export default App;
