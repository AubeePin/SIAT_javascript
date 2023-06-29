import React, {useState} from "react";

function Input({appendFn}) {
  const[text, setText]=useState();
  return(
    <>
    메모 : <input type="text" value={text} onChange={(e)=>{
      setText(e.target.value);
    }}/><button onClick={() => {
      console.log(text);
      appendFn(text);
    }}>넣어지네?</button> 
    </>
  )
}

export default Input;