import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        //console.log("use effect ran");
        //console.log(blogs);
        //const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)

            .then(res => {
                console.log(res);
                if(!res.ok){
                   throw Error('Could not fetch the data because of server error!');
                }

                return res.json();
            })
            .then(data => {
                //console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch( err => {
               //console.log(err.messsage)
              // if (err.name === 'AbortError'){
              //     console.log('Fetch aborted')
              // }
              // else{
                   setIsPending(false);
                   setError(err.message);
              // }
            })
          
        }, 1000)

    }, [url]);

    //return () => abortCont.abort();

    return {data, isPending, error}
}


export default useFetch;