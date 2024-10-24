
import {List} from './style'
import { productContext } from "../../contexts/products"
import { ActionTypes } from '../../pages/Home/Home'
import { useContext } from 'react'

export default function Nav() {

  const {handleFilter} = useContext(productContext)

  return (
      <>
        <List>
          <li onClick={()=> {handleFilter('All')}}>All</li>
          <li onClick={()=> {handleFilter('car')}}>Car</li>
          <li onClick={()=> {handleFilter('bike')}}>Bike</li>
        </List>
      </>
  )

}