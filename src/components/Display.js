export default function Displaycurrent({current,location}){
 
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