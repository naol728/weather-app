import './App.css';

function App() {



  return (
    <>
     <Search />
    <div className='maincontainer'>
      <Displaycurrent />
      <Map />
      <Futureforcast />
    </div>
    </>
  );
}
function Search (){
  return (
    <div className="searchbox">
      <input  type='text' placeholder='search for location' />
    </div>
    
  )
}
function Displaycurrent(){
  return<div className="displaycurrent">
    <div>
      <h1>Current Weather</h1>
      <p>12:34</p>
    </div>
      <div className="currentforcast">
          <p>image</p>
          <div> 
          <p> 17*c </p>
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
