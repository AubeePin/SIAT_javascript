import { useState } from "react";

export default function Input() {
  const[newWork, setNewWork] = useState("");
  return(
    <>
      메모 : <input onChange={function(e){
        setNewWork(e.target.value);
      }} value={newWork}/><button>추가</button>
    </>
  )
}

export default Input;