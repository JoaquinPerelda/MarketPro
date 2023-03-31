import React from 'react'
// import '../ItemCount/itemCount.css'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = React.useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='container'>
            <div>
                <button className="btn btn-danger" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="btn btn-danger" onClick={increment}>+</button>
            </div>
            <div>                
                <button type="button" className="btn btn-success mt-2" onClick={() => onAdd(quantity)}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount