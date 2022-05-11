
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import List from './components/List';
import React,{ useState } from 'react';

import Search from './components/Search';
import {Route, Routes} from 'react-router-dom'
import Desc from './components/Desc';
import Addmovie from './components/Addmovie';
import Naviguation from './components/Naviguation';


const App =() => {
  const [movies, setMovies] = useState([{
    Id:1,
    Title:'Guardians of the Galaxy Vol. 2',
    Released:'05 May 2017',
    Genre:'Action, Adventure, Comedy',
    Poster:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    Rate:40,
    Description:`
    Les Gardiens de la Galaxie doivent lutter
    pour garder leur nouvelle famille unie lorsqu'ils percent 
    le mystère de la véritable filiation de Peter Quill.`,
    Trailer:'https://www.youtube.com/embed/wUn05hdkhjM'
    
  },
  {
    Id:2,
    Title:'Hitman',
    Released:'11 mars 2016',
    Genre:'Action, Adventure, nfiltration',
    Poster:'https://images-na.ssl-images-amazon.com/images/I/712zOn80uYL.jpg',
    Rate:50,
    Description:`
    When Agent 47 joins the ICA to hunt down threats to
    mankind, he is also pulled into a game of Cat and Mouse against 
    a mysterious organization that is determined to stop him. All the
    while he is being stalked by someone from his past.`,
    Trailer:'https://www.youtube.com/embed/alQlJDRnQkE'
  },
  {
    Id:3,
    Title:'John Wick',
    Released:'19 September 2014',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY21UWWp2TnBqRWNtYm1MTnBUcHZtbQ.jpg',
    Rate:100,
    Description:`
    Un ancien tueur à gages sort de sa retraite pour retrouver 
    les gangsters qui ont tué son chien et lui a tout pris.`,
    Trailer:'https://www.youtube.com/embed/C0BMx-qxsP4'
  },
  {
    Id:4,
    Title:'The Batman',
    Released:'19 January 2022',
    Genre:'Action, Crime, Drama',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bXBZWXZtRW12RWNjdHdsbXZtTE56UA.jpg',
    Rate:81,
    Description:`
    Lorsque le Riddler, un tueur en série maniaque, 
    commence à assassiner des personnalités politiques clés à Gotham,
    Batman est obligé d'enquêter sur la corruption cachée de la ville
    et de remettre en question l'implication de sa famille.`,
    Trailer:'https://www.youtube.com/embed/mqqft2x_Aa4'
  }
  ,
  {
    Id:5,
    Title:'Ambulance',
    Released:'02 February 2022',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bVlURW1qbXBFRWNtRW1wdm1tbG1URW12.jpg',
    Rate:63,
    Description:`
    Deux voleurs sont obligés de fuir dans une ambulance après
    que leur cambriolage ait mal tourné.`,
    Trailer:'https://www.youtube.com/embed/7NU-STboFeI'
  } ,
  {
    Id:6,
    Title:'The Northman',
    Released:'09 Mars 2022',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bW12Y3ZObXZjdmNFY21HTm1tYndUZk5n.jpg',
    Rate:79,
    Description:`
    Le réalisateur visionnaire Robert Eggers présente 
    The Northman, une épopée remplie d'action qui suit
    un jeune prince viking dans sa quête pour venger le
     meurtre de son père.`,
    Trailer:'https://www.youtube.com/embed/oMSdFM12hOw'
  }
  ,
  {
    Id:7,
    Title:"Fortress: Sniper's Eye",
    Released:'25 December 2020',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bXZtb3ROWUVFY3dUbXZOalBtWVRq.jpg',
    Rate:20, 
    Description:`
    L'histoire tourne autour d'un lieu de villégiature ultrasecret
    pour les officiers du renseignement étasuniens à la retraite.`,
    Trailer:'https://www.youtube.com/embed/zMkOaP4XydQ'
  }
  ,
  {
    Id:8,
    Title:'Wrath of Man ',
    Released:'25 July 2021',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY21Zam1wbW1ZYnZSY21FbW1hbWJ2TmptbWE.jpg',
    Rate:71,
    Description:`
    A mysterious and wild-eyed new cash truck security guard
    (Jason Statham) surprises his coworkers during a heist in which he
    unexpectedly unleashes precision skills. The crew is left wondering
    who he is and where he came from`,
    Trailer:'https://www.youtube.com/embed/EFYEni2gsK0'
  }]);
  const [searchByValue, setsearchByValue] = useState("");
  const [searchByRate, setsearchByRate] = useState(0)
  const handleSearchValue = (value) => {setsearchByValue(value)  }
  const handleSearchByRate = (rate) => {setsearchByRate(rate)  }
  const handleEdit = (id,editedMovie) => { setMovies(movies.map(
    (el)=>el.Id===id ? {...el,...editedMovie}:el
  )) }

  const AddMovie = (movie) => { setMovies([...movies,movie]) }
  return (
    <div className="container-fluid movie-app">
    <Naviguation/>
      <Routes>
      <Route path='/'element={<div className='row'>
        <Search handleSearchValue={handleSearchValue} handleSearchByRate={handleSearchByRate} 
       searchByRate={searchByRate} />
        <List movies={movies.filter(
          (el)=>el.Title.toLowerCase().includes(searchByValue.trim().toLowerCase())
          &&el.Rate>=searchByRate
        )} handleEdit={handleEdit}/>
    
      {/* <Add addedMovie={AddMovie}/> */}
      
     
      
      </div>}/>
      <Route path='/desc/:id' element={<Desc movies={movies}/>}/>
      <Route path='/addMovie' element={<Addmovie addedMovie={AddMovie}/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
