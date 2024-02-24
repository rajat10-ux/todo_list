import React,{useState,useEffect} from 'react'
 function Home() {
  useEffect(()=>{
console.log("run");
  },[]);

  // page render ho raha hai use state ka use karke
  const [inputValue,setInputValue]=useState(0);

  // console.log(inputValue);
  // const increment =()=>{
  //   if(inputValue==20)return;
  //    setInputValue(inputValue+2);
  // }
  // const decrement=()=>{
  //   if(inputValue==0) return;
  //   setInputValue(inputValue-1);
  // }
  // const btnStyle={
  //   padding:20,
  //   border:"none",
  //   backgroundColor:"green",
  //   margin:20
  // }
  return (
    <div>
      <input 
      style={{padding:20,border:"1px solid red"}}
      type="number"
      placeholder="enter something"
       value={inputValue} 
       onChange={(e)=>{
        setInputValue(e.target.value);
       }}
      />
    </div>
  )
}
export default Home;