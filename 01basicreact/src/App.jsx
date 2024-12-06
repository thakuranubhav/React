
import Anu from "./anu"
function App() {
  const virat="BGT 2024";
  let ct=12;
  const addvalue=()=>{
    console.log("hello world");
    ct=ct+1;
    console.log(ct);
  }

  return (
  <>
    <Anu/>
    <h1>Hello baby {virat}</h1>
    <h2>current value {ct}</h2>
    <button  onClick={addvalue}
    >Add {ct}</button>
  </>
  )
}

export default App
