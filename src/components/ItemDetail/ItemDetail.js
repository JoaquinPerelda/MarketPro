import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/itemDetail.css'
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
    }

    return (
        <div className='card-detail'>
            <div className='row'>
                <div className="card">
                    <img src={img} alt={name} className="ItemImg" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className='card-text'>{description}</p>
                        {/* <p className="card-text"><small className="text-muted">Stock: {stock}</small></p> */}
                        <p className="card-text"><small className="text-muted">Precio: ${price}</small></p>
                         <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail