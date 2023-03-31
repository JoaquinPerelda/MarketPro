const productos = [
    {
        id: '1',
        name: 'Iphone',
        price: '100000',
        category: 'celular',
        img: 'https://cdn0.ispace.am/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083456421740/221010160011128841.png@webp',
        stock: 10,
        description: 'Ultima generación de smartphones'
    },
    {
        id: '2',
        name: 'Tablet Samsung A20 Lite',
        price: '20000',
        category: 'tablet',
        img: 'https://www.lenovo.com/medias/mkt-hero.png?context=bWFzdGVyfHJvb3R8MjM1NTEwfGltYWdlL3BuZ3xoNzIvaDBmLzE1ODY4NzEwOTQ0Nzk4LnBuZ3xmNzRmYmVmYmI5YTljMTI0OTY2MzRlNTgzYWRiZjE0MDVmMjI2ODZmN2E0M2FjNjQ5NDRmNjQ1Y2ZmOGVlNWQz',
        stock: 14,
        description: 'Genial dispositivo para niños'
    },
    {
        id: '3',
        name: 'TV Smart 40 pulgadas TCL',
        price: '150000',
        category: 'tv',
        img: 'https://images.samsung.com/is/image/samsung/latin-fhd-t5300-un43t5300apxpa-frontblack-229166470?$650_519_PNG$',
        stock: 5,
        description: 'Vas a poder disfrutar de tus peliculas como si estuvieses en el cine'
    }
]

export const getProductos = () => {    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productoId) => { 
    console.log(productoId)   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 1000)
    })
}