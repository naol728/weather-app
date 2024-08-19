import './App.css';
import Search from './Search';
import Displaycurrent from './Display';
import Futureforcast from './Futureforcast';
import {useEffect, useState} from 'react';
import Frontpage from './Frontpage';

import Loading from './Loading';
import Error from './Error';
const 
key="3af6fc04f28f46e4aa2105112241908"
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
        {query.length <3 ? <Frontpage /> :
      <>
{loading ? 
<Loading />
 : 
  error ?  
  <Error /> 
  :
 <> 
 <Displaycurrent current={current} location={location}/>
<Futureforcast />
</>
     
      }
      </>
}
    </div>
    </>
  );
}

export default App;
