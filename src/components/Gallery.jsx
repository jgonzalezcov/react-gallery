import React from 'react'

const Gallery = (props) => {
  return (
    <div className="card">
      <img src={props.srcs} alt={props.alt} />
      <h3>Nombre: {props.name}</h3>
      <p>Raza: {props.category}</p>
    </div>
  )
}

export default Gallery
