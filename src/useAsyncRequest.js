import React, { useEffect, useState } from 'react'

const useAsyncRequest=(amount)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setLoading(true);
                const response = await fetch("http://localhost:3010/student")
                const json = await response.json();
console.log("json"+json)
                setData(json,setLoading(false))
            }
            catch(error){
                console.warn("Something went wrong fetching API..."+ error)
                setLoading(false);
            }
        };
        if(amount){
            fetchData(amount);
        }
    },[amount]);
    return [data,loading]
}

export default useAsyncRequest