import { useState, useEffect } from 'react';

const useFetch = (url = '', options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (isMounted) {
          setData(json);
          setError(null);
        }
      })
      .catch(({ message }) => {
        if (isMounted) {
          setError(message);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => { isMounted = false; };
  }, [url, options]);

  return [loading, error, data];
};

export default useFetch;
