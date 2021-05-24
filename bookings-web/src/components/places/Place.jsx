import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/App.css';

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <section className={style.place}>
      <h3>{name}</h3>
      <div>{description}</div>
      <div className={style.location}>{location}</div>
      <li>-${pricePerNight} per night</li>
      <li>-Max guests: {maxGuests}</li>
      <li>-{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li>-Has a Pool!</li> : null}
      {wifi ? <li>-Free Wifi</li> : null}
      <img className={style.img} src={image} />
      <img className={style.thumbnail} src={imageThumbnail} />
    </section>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
