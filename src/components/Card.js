import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { EditMovie } from './EditMovie'

const MovieCard = ({movie,handleEdit}) => {
  return (
    <div  className='image-container d-flex  m-3'>
       
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Poster} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    
      <label htmlFor="">Genre:</label><h3> {movie.Genre}</h3>
      <label htmlFor="">Released :</label> <h3>{movie.Released}</h3>
      <label htmlFor="">Rate :</label> <Rating  ratingValue={movie.Rate} readonly='true'/* Available Props */ />
     <div className='buttons'>
      <EditMovie handleEdit={handleEdit} movie={movie}/>
     
    <Link to={`/desc/${movie.Id}`}>
      <Button variant="primary">Details</Button>
      </Link>
      </div>
  </Card.Body>
</Card>
      </div>
  )
}

export default MovieCard
