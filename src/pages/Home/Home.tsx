
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useReducer } from 'react'
import { fetchData } from './fetch'
import { productContext } from '../../contexts/products'

import NavList from '../../componants/NavList/NavList'
import Mhead from '../../componants/Main/Mhead'
import MainContiner from '../../componants/Main/Main'
import { Header, Logo, DropDown, Search, Language, AddLogin, Nav, Main } from './styles'

import search from '../../images/search.png'
import CustomButton from '../../images/CustomButton.png'
import { error } from 'console'


export interface productProps {
   category: string;
   brand: string;
   name: string;
   price: string;
   imageURL: string;
}

export enum ActionTypes {
   FETCHLOADING = 'FETCHLOADING',
   FETCHSUCCESS = 'FETCHSUCCESS',
   FETCHERROR = ' FETCHERROR',
   ALL = 'ALL',
   BIKES = 'BIKES',
   CARS = 'CARS'
}

export type Action =
   | { type: ActionTypes.FETCHLOADING }
   | { type: ActionTypes.FETCHSUCCESS, payload: productProps[] }
   | { type: ActionTypes.FETCHERROR, payload: string }
   | { type: ActionTypes.ALL,payload: productProps[]}
   | { type: ActionTypes.BIKES,payload: productProps[]}
   | { type: ActionTypes.CARS,payload: productProps[]}


interface InitialState {
   loading: boolean;
   products: productProps[],
   error: string | null
}

const reducer = (state: InitialState, action: Action) =>{

   switch (action.type) {
      case ActionTypes.FETCHLOADING:
         return { ...state, loading: true, error: null }
      case ActionTypes.FETCHSUCCESS:
         return { ...state, loading: false, products: action.payload, error: null }
      case ActionTypes.FETCHERROR:
         return { ...state, loading: false, error: action.payload }
      default:
         return state
   }

}

const InitialState: InitialState = {
   loading: false,
   products: [],
   error: null
}

export default function Home() {

   const navigate = useNavigate()
   const [productsFetched, setProductsFetched] = useReducer(reducer, InitialState)
   const [filterCopy,setfilterCopy] = useState<productProps[]>([])

   useEffect(() => {

      const fetProdctsData = async () => {

         setProductsFetched({ type: ActionTypes.FETCHLOADING })

         try {
            const products: productProps[] = await fetchData()
            setProductsFetched({ type: ActionTypes.FETCHSUCCESS, payload: products })
            setfilterCopy([...products])

         } catch (error) {
            setProductsFetched({ type: ActionTypes.FETCHERROR, payload: 'Failed to fetch posts' })
         }

      }

      fetProdctsData()
   }, [])

   const handleFilter= (category:string)=> {
       if(category === 'All') {
         setfilterCopy(productsFetched.products)
       }
       else if(category === 'car') {
           setfilterCopy(productsFetched.products.filter(product => product.category ==='car'))
       }
       else if(category === 'bike') {
         setfilterCopy(productsFetched.products.filter(product => product.category ==='bike'))
       }
   }


   let { loading, products, error } = productsFetched

   return (
      <>
         <productContext.Provider value={{ products,  setProductsFetched ,filterCopy,handleFilter}}>
            <Header>
               <Logo />
               <DropDown />
               <Search>
                  <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
                  <button > <span> <img src={search} /></span> </button>
               </Search>
               <Language />
               <AddLogin >
                  <div id='Login'>
                     <p >Login</p>
                  </div>
                  <div onClick={() => navigate('/add')} id='custom-button'>
                     <img src={CustomButton} alt="" />
                  </div>
               </AddLogin>
            </Header>

            <Nav>
               <NavList />
            </Nav>

            <Main>
               <Mhead />
               <MainContiner />
            </Main>
         </productContext.Provider>
      </>
   )
}