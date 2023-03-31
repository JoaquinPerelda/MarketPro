import React from 'react'
import { IoCartOutline } from "react-icons/io5";


const CartWidget = () => {
    return (
        <div className="d-flex align-items-center me-5">                    
            <IoCartOutline size={30} />
            <span className="badge rounded-pill bg-danger ms-2">2</span>
        </div>
    )
}

export default CartWidget