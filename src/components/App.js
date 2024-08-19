import './App.css';
import {useEffect, useState} from 'react';
const key="3af6fc04f28f46e4aa2105112241908"
function App() {
   const [query,setQuery]=useState('addis ababa');
   const [current,setCurrent]=useState([])
  console.log(current?.temp_c)
   useEffect(
    function (){
      const controller = new AbortController();
 async function fetchweatherdata(){
    if(query.length===0) return;
  try{
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=3af6fc04f28f46e4aa2105112241908&q=${query}&aqi=no
      `, { signal: controller.signal })
          const data= await res.json()
          setCurrent(data.current)
          console.log(data)
  }
    catch(err){
      console.log(err)
    }
  }
  fetchweatherdata()
    },[query]
   )

  return (
    <>
     <Search query={query} setQuery={setQuery}/>
    <div className='maincontainer'>
      <Displaycurrent current={current}/>
      <Map />
      <Futureforcast />
    </div>
    </>
  );
}
function Search ({query,setQuery}){
  return (
    <div className="searchbox">
      <input  onChange={(e)=>setQuery(e.target.value)} value={query} type='text' placeholder='search for location' />
    </div>
    
  )
}
function Displaycurrent({current}){
  return<div className="displaycurrent">
    <div>
      <h1>Current Weather</h1>
      <p>12:34</p>
    </div>
      <div className="currentforcast">
          <p><img src={current?.condition?.icon} alt="/" /></p>
          <div> 
          <p> {current?.temp_c} </p>
          <p> light rain <span>feels like 16*c</span></p> </div>
      </div>
    <div className="moreinfo">
      <div>wind 15km/hr</div>
      <div>humuidity 74%</div>
      <div>feels like</div>
      <div>pressure 7km</div>
    </div>
  </div>
}
function Map(){
  return <div className="map">
    map 
  </div>
}
function Futureforcast(){
  return <div className="futureforcast">
     <ul className="futureforcastlist">
      <Futureforcastlist />
     </ul>
  </div>
}
function Futureforcastlist(){
  return <li>
    
       </li>
}
export default App;
