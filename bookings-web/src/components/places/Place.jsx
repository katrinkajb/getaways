import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/App.css';
import { Link } from 'react-router-dom';

const Place = ({
  id, 
  name,
  description,
  location,
  pricePerNight,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <a href={`/${id}`} className={style.place}>
      <h3>{name}</h3>
      <div className={style.location}>{location}</div>
      <div>{description}</div>
      <div>-${pricePerNight} per night</div>
      <div>-Max guests: {maxGuests}</div>
      <div>-{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</div>
      {pool ? <div>-Has a Pool!</div> : null}
      {wifi ? <div>-Free Wifi</div> : null}
      <img className={style.thumbnail} src={imageThumbnail} />
    </a>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
