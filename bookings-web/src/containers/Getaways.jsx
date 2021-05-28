import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Loading from '../components/Loading/Loading';
import style from '../components/app/App.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(10);

  const indexOfLastPlace = page * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />
  
  else return (
    <main className={style.main}>
      <div className={style.page_buttons}>
        <span>Page: {page} </span> 
        <button onClick={() => setPage((page) => page - 1)}>Prev</button> 
        <button onClick={() => setPage((page) => page + 1)}>Next</button>
      </div>
      <PlaceList places={currentPlaces} />
    </main>
  )
};

export default Getaways;
