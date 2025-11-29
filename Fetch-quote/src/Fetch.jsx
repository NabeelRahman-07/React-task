import React, { useEffect,useState } from 'react'

function Fetch() {
    const [quote,setQuote]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/quotes")
        .then((res)=>res.json())
        .then((data)=>{
            setQuote(data.quotes.slice(0,10))
        })
        .catch((error)=>setQuote(["Error was occurd:"]))
    },[])
  return (
    <div>{quote.map((item)=><h1>{item.quote}</h1>)}</div>
  )
}

export default Fetch