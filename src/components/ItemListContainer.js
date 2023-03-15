import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className="text-center">{greeting}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer