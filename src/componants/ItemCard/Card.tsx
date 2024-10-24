import { Container } from "./style"
import { useContext, useEffect, useState } from "react"
import { productContext } from "../../contexts/products"

export default function Card () {

    const {filterCopy} = useContext(productContext)

    return (
      <Container>
        <ul>
            {filterCopy && filterCopy.map(product=> {
              return <li >
               <div id="image">
                   <img src={product.imageURL} alt="" />
               </div>
               <div id="contant">
                   <h3>₹{product.price}</h3>
                   <h4>{product.name}</h4>
                   <p>{product.brand}</p>
               </div>
           </li>
             } )}
        </ul>
      </Container>
    )
}