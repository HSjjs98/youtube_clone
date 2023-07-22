import React, { useState } from 'react';
import {useQuery} from '@tanstack/react-query'

export default function Videos() {
  const [keyword, setKeyword] = useState('')
  const {isLoading, error, data: videos} = useQuery(['videos', checked], async () => {
    console.log('fetching...')
    return fetch(`data/${checked? 'sale_': ''}products.json`)
      .then((res) => res.json())
  }, {
    staleTime: 5000,
  })
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <div>
      
    </div>
  );
}

