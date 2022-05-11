import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

export const EditMovie = ({handleEdit,movie}) => {
    const [name,setName]=useState(movie.Title);
    const [genre, setGenre] = useState(movie.Genre);
  const [date, setDate] = useState(movie.Released);
  const [rating, setRating] = useState(movie.Rate);
  const [Poster,setPoster]=useState(movie.Poster);
  const handleRating = (rate) => {
    setRating(rate)
   
  }
  const handleSubmit = (e) => {e.preventDefault()
    handleEdit(movie.Id,{Title:name,Genre:genre,Released:date,Rate:rating,Poster,Id:Math.random()})
   
    handleClose() }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Edit Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Movie Name" onChange={(e)=> setName(e.target.value) }value={name} required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Poster</Form.Label>
    <Form.Control type="url" placeholder="Movie Name" onChange={(e)=> setPoster(e.target.value) } value={Poster}required />
    
    
  </Form.Group>
  

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Genre</Form.Label>
    <Form.Control type="text" placeholder="Genre" onChange={(e)=> setGenre(e.target.value) } value={genre} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date</Form.Label>
    <Form.Control type="text" placeholder="Released date" onChange={(e)=> setDate(e.target.value) } value={date}required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rate</Form.Label>
    <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
    </>
  )
}
