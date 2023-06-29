import React, { useState } from 'react';


function Input({appendFn}){
  const [text, setText] = useState();
  return(
    <>
    메모 : <input type="text" placeholder='해야할일 입력해주세요.' value={text} onChange={(e) => {
      setText(e.target.value);
      }}/><button onClick={() => {
    console.log(text);
    appendFn(text);
    }}>클릭</button>
    </> 
  )
}

export default Input;