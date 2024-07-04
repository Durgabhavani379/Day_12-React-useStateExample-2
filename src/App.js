import React,{useState,useEffect} from'react';
import UseEffectExample1 from './UseEffectExample1';
import UseEffectExample2 from './UseEffectExample2';
function App() {
  const[data,setData]=useState(true);
  const[count,setCount]=useState(0);
 useEffect(()=>{
    return console.log("effect called");
 },[count,data])
  return (
    <div className="App">
      <h1>this is UseEffect</h1>
      <h2 >{count}</h2>
      <button type="button" onClick={()=>{setCount(count+1);}}>Count</button>
      <h3 onClick={()=>{setData(!data)}}>
       {data? "open" :"close"}</h3>
       <hr></hr>
       <h1>useEffect Example1(Fetching the data)</h1>
       <div>
<UseEffectExample1/>
       </div>
       <hr>
       </hr>
       <h1>UseEffect Example2</h1>
       <div>
        <UseEffectExample2/>
        </div>
    </div>
  );
}

export default App;
