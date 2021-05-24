import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Loading from '../components/app/Loading';
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

  if (loading === true) return <Loading />
  
  else return (
    <>
      <h1 className={style.header}>Plan your Getaway!</h1>

      <span>Page: {page} </span> 
      <button onClick={() => setPage((page) => page - 1)}>Prev</button> 
      <button onClick={() => setPage((page) => page + 1)}>Next</button>

      <section className={style.main}>
        <PlaceList places={currentPlaces} />
      </section>
    </>
  )
};

export default Getaways;
