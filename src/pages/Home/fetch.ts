import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig"

interface Product {
  category:string;
  brand:string;
  name:string;
  price:string;
  imageURL:string;
}

export const fetchData = async ():Promise<Product[]> => {

    try{

        // reffering the collection
        const productRef = collection(db,'products')
        const productSnap = await getDocs(productRef) 

        const Products:Product[] = productSnap.docs.map(doc=> {
            return doc.data() as Product
        })

        return Products
    }
    catch(error) {
     
        console.error('Error Fetching Product',error)
        throw error;

    }
   
}