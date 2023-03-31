import React from 'react'
import Item from '../Item/Item'
import '../ItemList/itemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='row'>
            {products?.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList