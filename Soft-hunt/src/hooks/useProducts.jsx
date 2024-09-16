import { useEffect, useState } from "react";


const useProducts = () => {
const url = 'https://fakestoreapi.com/products'
const [item ,setItem] = useState([])
const [error, setError] = useState()
const [loading,setLoading] = useState(true)

useEffect(() => {

    const fetchItem = async () => {
        try{
            const res = await fetch(url)
            if(!res.ok){
                throw new Error('Opps! bad request')
            }
            const data = await res.json()
            setItem(data)
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }
    fetchItem()
},[])
    return [item,error,loading]
};

export default useProducts;