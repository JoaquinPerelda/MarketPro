import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos, getProductosByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductosByCategory : getProductos

        asyncFunction(categoryId)
            .then(productos => {
                setProducts(productos)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])    

    return (
        <div className='container'>
            <div className='row'>
                <h1 className="text-center">{greeting}</h1>
                <ItemList products={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer