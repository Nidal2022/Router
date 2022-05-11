import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Search = ({handleSearchValue,searchByRate,handleSearchByRate}) => {
  return (
    <div><input type="text" placeholder='Tape the movie name' name="" id="" onChange={(e)=>handleSearchValue(e.target.value)} />
    <Rating  onClick={handleSearchByRate} ratingValue={searchByRate} /* Available Props */ /></div>
  )
}

export default Search