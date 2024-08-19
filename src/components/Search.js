export default function Search ({query,setQuery}){
    return (
      <div className="searchbox">
        <input  onChange={(e)=>setQuery(e.target.value)} value={query} type='text' placeholder='search for location' />
      </div>
      
    )
  }