import { useState, useEffect } from "react";

const UseDataUrl = ({url, buttonClick}) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

// const base = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
  const getData = () => {};

  useEffect( () => {
    if(!buttonClick){
      return 
    }
    metaData(url)
  }, [url]);

    const metaData = async (url) => {
    let data = await fetch(url);
    let fetchData = await data.json();
    setInfo(fetchData);
    setLoading(false);
    setIsLoaded(true)
  };

  return [{ info, loading, setInfo, isLoaded, setLoading }, getData];
};

export default UseDataUrl;
