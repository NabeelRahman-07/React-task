import React, { useState } from 'react'

function Color() {
    const [color,ChangeColor]=useState("white");
        function backGround(){
            color=="white"?ChangeColor("black"):ChangeColor("white");
        }
  return (
    <div style={{backgroundColor:color,height:"100vh", width:"100vw" }}>
        <button onClick={backGround}>Change color</button>
    </div>
  )
}

export default Color