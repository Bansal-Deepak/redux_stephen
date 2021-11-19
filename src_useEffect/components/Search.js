import React, { useState,useEffect } from 'react';
import wikipedia from 'apis/wikipedia';


const Search = () => {
    
  let [term, setTerm] = useState('');
  const [results,setResults]=useState([]);

  console.log('results>,',results);
  let onInputChange = (e) => {
   
    setTerm(e.target.value);
    
  };
  
  useEffect(()=>{
      console.log('running useEffect');
      if(!term){
          setResults([]);
      }
     let timeOutId;
    if(term){  
        timeOutId= setTimeout(()=>{
            (async()=>{
                let config={
                    'Content-Type':'application/json'
                }
            const {data}=await wikipedia.get(`/api.php`,{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            },config);
            setResults(data.query.search);
            })();
        },5000);

    }
    return ()=>{
        clearTimeout(timeOutId);
    }
  },[term])

// useEffect(()=>{
//     console.log('initial render or term was changed');
//     return ()=>{
//         console.log('cleanup');
//     }
// },[term]);
  return (
    <div>
      <label htmlFor="input">Search</label>
      <form >
        <input type="text" id="input" onChange={onInputChange} value={term} />
      </form>
      {results.length>0 && results.map(({title,snippet,pageid})=>{
          return(<div key={title}>
              <h3>{snippet}</h3>
              <a href={`https://en.wikipedia.org?curid=${pageid}`}>Go</a>
          </div>)
      })}
      
    </div>
  );
};
export default Search;
