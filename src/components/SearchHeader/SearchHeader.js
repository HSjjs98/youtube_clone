import React, { useState } from 'react';
import {FaYoutube, FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import styles from './SearchHeader.module.css'

export default function SearchHeader() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/search/${search}`)
    setSearch('')
  };
  
  return (
    <div className={styles.container}>
      <button onClick={() => navigate('/videos')} className={styles.youtube}>
        <FaYoutube className={styles.logo}/>
        Youtube
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" value={search} onChange={handleChange} placeholder='Search'/>
        <button className={styles.searchbutton}>
          <FaSearch/>
        </button>
      </form>
    </div>
  );
}

