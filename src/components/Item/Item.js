import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Item/item.css'

const Item = ({ id, name, img, price, description }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="ItemImg" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><small className="text-muted">Precio: {price}</small></p>
        <Link to={`/item/${id}`} className='Option'>
          <button type="button" className="btn btn-success ">Ver detalle</button>
        </Link>
      </div>
    </div>
  )
}

export default Item