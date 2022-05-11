import React from 'react';

import MovieCard from './Card';

const List = (props) => {
  return (
    <div style={{display:"flex",justifyContent:'space-around',flexWrap:'wrap' }}>

    {props.movies.map((movie,i)=><MovieCard movie={movie} key={i} handleEdit={props.handleEdit}/>
    )}
</div>
    
  )
}


export default List