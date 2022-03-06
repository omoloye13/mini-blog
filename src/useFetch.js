import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading]= useState(true);
    // to output the err.message to the browser we will create a state
    const [error, setError]=useState(null);
      // this useEffect hook can be used to fetch data or do some authentication
      useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
          fetch(url, {signal: abortCont.signal})
          .then(res =>{
              // console.log(res)
              if (!res.ok ) {
                  throw Error('could not fetch data for that resource');
                  
              }
            return  res.json();
          })
      .then(data =>{
          setData(data);
          setLoading(false);
          setError(null)
  
      })
      .catch(err=>{
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        }else{
          setError(err.message)
          setLoading(false)
        }
         
      })
        }, 1000);
        // useEffect cleanup fxn below
        return ()=> abortCont.abort();
      },[url]); 
     return{ data, isLoading, error}
}
 
export default useFetch;