import React from "react";
import { Button} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import '../App.css';
const Desc = ({ movies }) => {
  let params = useParams();
  const film = movies.find((el) => el.Id == params.id);
  console.log(film);
  return (
    <div className="details">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          width="1320"
          height="315"
          src={film.Trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2>{film.Title}</h2>
        <h4>Description :</h4>
        <pre><h5>{film.Description}
        </h5></pre>
        
      </div>
    </div>
  );
};

export default Desc;
