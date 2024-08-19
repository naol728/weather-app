import './App.css';
import {useEffect, useState} from 'react';
const key="3af6fc04f28f46e4aa2105112241908"
function App() {
   const [query,setQuery]=useState('');
   const [current,setCurrent]=useState([])
   const [location,setLocation]=useState([])
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(false)
  console.log(current?.temp_c)
   useEffect(
    function (){
      const controller = new AbortController();
 async function fetchweatherdata(){
  try{
    setLoading(true)
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=3af6fc04f28f46e4aa2105112241908&q=${query}&aqi=no
      `, { signal: controller.signal })
          const data= await res.json()
          setCurrent(data.current)
          setLocation(data.location)
          console.log(data)
          setLoading(false)
  }
    catch(err){
      console.log(err)
      setError(true)
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  }
  fetchweatherdata()
    },[query]
   )

  return (
    <>
     <Search query={query} setQuery={setQuery}/>
      <div className='maincontainer'>
        {query.length <3 ?  <div className='frontpage'>
          <h1>
            please search the location🚀
         </h1>
         </div>:
      <>
{loading ? 
 <div >loading</div>  :  error ? <div>error while tching data</div>   : <div> <Displaycurrent current={current} location={location}/>
<Futureforcast /></div>
     
      }
      </>
}
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




function Displaycurrent({current,location}){
 
  return<div className="displaycurrent">
    <div>
      <h1>Current Weather</h1>
      <p>{location?.name}</p>
      <p>{(current?.last_updated)}</p>
    </div>
      <div className="currentforcast">
          <p><img src={current?.condition?.icon} alt="/" /></p>
          <div> 
          <p> {current?.temp_c}°C</p>
          <p> {current?.condition?.text} {current?.feelslike_c}°C </p> </div>
      </div>
    <div className="moreinfo">
      <div>wind {current?.wind_kph} Km/hr</div>
      <div>humuidity {current?.humidity} </div>
      <div>feels like {current?.feelslike_c} °C</div>
      <div>pressure {current?.pressure_in} in</div>
    </div>
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
