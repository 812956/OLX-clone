import { createContext } from "react";
import { productProps,Action } from "../pages/Home/Home";

interface SetProduct {
    products:productProps[];
    setProductsFetched:React.Dispatch<Action>;
    filterCopy:productProps[];
    handleFilter:(category:string)=> void
}

export const productContext = createContext<SetProduct>({products:[], setProductsFetched:()=>{},filterCopy:[],handleFilter:()=>{}})
