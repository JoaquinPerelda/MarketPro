import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const { itemId } = useParams()

  console.log(itemId)
  
  useEffect(() => {
    getProductById(itemId).then(response => {         
      setProduct(response)
    }).catch(error => {
      console.log(error)
    })
  }, [itemId])

  console.log(product)

  return (
    <div className = "container">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer