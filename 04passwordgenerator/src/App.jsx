import { useState,useCallback,useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numallowed, setNumallowed] = useState(false)
  const [charallowed, setCharallowed]= useState(false)
  const [password, setPassword]= useState("")
  const [btnText,setBtntext]= useState("copy")


//useRef hook
const passwordRef= useRef(null)
const copyPasswordToclipboard =useCallback(()=>{
window.navigator.clipboard.writeText(password)
passwordRef.current?.select();
passwordRef.current?.setSelectionRange(0,10);

},[password])


 const passwordgenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallowed){
      str+="0123456789";
    }
    if(charallowed){
      str+='~`!@#$%^&*()_={}[]\|'
    }
    for(let i=1;i<= length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char);

    }
    setPassword(pass);
  }, [length,numallowed,charallowed,setPassword])
  useEffect(()=>{
    passwordgenerator();
    

  },[length,numallowed,charallowed,setPassword,btnText])

  return (
    <>
  <div className='w-full max-w-md mx-80 shadow-md rounded-lg px-4 py-3 my-10 text-orange-400 bg-gray-800'>
    <h1 className='text-2xl text-center py-2'>Password Generator</h1>
  <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={password} 
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button 
    onClick={copyPasswordToclipboard}
    className='outline-none bg-orange-600 text-white px-3 py-0.5 shrink-0'>{btnText}</button>
  </div>

  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={8}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{ setLength(e.target.value)}}
       /> <label >Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numallowed}
      id='numberInput'
      onChange={()=>{
        setNumallowed((prev)=>
          !prev);
      }}
       /> <label htmlFor="numberInput">Numbers</label>
        <input 
      type="checkbox"
      defaultChecked={charallowed}
      id='charecterInput'
      onChange={()=>{
        setCharallowed((prev)=>
          !prev);
      }}
       /> <label htmlFor="charecterInput">Charecters</label>
    </div>
    

  </div>
  </div>
    </>
  )
}

export default App
