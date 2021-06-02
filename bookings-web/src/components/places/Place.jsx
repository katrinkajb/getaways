import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/App.css';

const Place = ({
  id, 
  name,
  description,
  location,
  imageThumbnail,
}) => {
  return (
    <a href={`/${id}`} className={style.place}>
      <h3>{name}</h3>
      <div className={style.location}>{location}</div>
      <div>{description}</div>
      <img className={style.thumbnail} src={imageThumbnail} />
    </a>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
};

export default Place;
