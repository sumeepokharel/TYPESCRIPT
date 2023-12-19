import { useState } from "react";

function App() {
  const[number, setNumber] = useState(0)

  return (
    <>
  <div>{number}</div>
  <button onClick={function(){
  setNumber(number +1 )}}
  >
   Click me to update
   </button>
</>
  )
}
export default App