import React, {createContext,useState,useEffect}from 'react';

//create context
  export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  //products state
  const[products,setProducts] = useState([])
  const[isLoading,setIsLoading] = useState(true)
  //fetch products
  useEffect(()=>{
         const fetchProducts = async()=>{
           const response = await fetch('https://fakestoreapi.com/products')
           const data = await response.json()
           setProducts(data)
            setIsLoading(false)
         };
         fetchProducts();
  },[]);
  return <ProductContext.Provider value={{products, isLoading}}> {children} </ProductContext.Provider>
    
}
export default ProductProvider