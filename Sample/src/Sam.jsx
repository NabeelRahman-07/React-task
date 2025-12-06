import React, { useEffect, useState } from 'react'

function Sam() {

    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [arr,setArr]=useState([]);
    const [error,setError]=useState("");

    function clickHandler(){
      if(name.length<3){
        setError("Name is invalid");
        return;
      }else if(!mail.includes("@")&&!mail.includes(".")){
        setError("Mail is invalid");
        return;
      }
      setError("");
      setName("");
      setMail("");
      const newarr=[name,mail]
      setArr(newarr);
    } 
    function removeList(ind){
       const neew=arr.filter((_,id)=>id!==ind);
       setArr(neew);
    }
  return (
    <div>
      <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name} />
      <input type="text" placeholder='Enter your mail' onChange={(e)=>setMail(e.target.value)} value={mail} />
      <button onClick={clickHandler}>Submit</button>
      {error && <p>Error occurd:{error}</p>}
      <h3>your details:</h3>
      <ul>
        {arr.map((val,ind)=><li key={ind}>{val}<button onClick={()=>removeList(ind)}>Clear</button></li>)}
      </ul>
        
    </div>
  )
}

export default Sam