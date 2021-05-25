import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/App.css';

const PlaceDetail = ({
    name,
    description,
    location,
    pricePerNight,
    maxGuests,
    petFriendly,
    pool,
    wifi,
    image,
}) => {
    return (
        <section className={style.place}>
            <h1>{name}</h1>
            <div className={style.location}>{location}</div>
            <div>{description}</div>
            <li>-${pricePerNight} per night</li>
            <li>-Max guests: {maxGuests}</li>
            <li>-{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
            {pool ? <li>-Has a Pool!</li> : null}
            {wifi ? <li>-Free Wifi</li> : null}
            <img className={style.img} src={image} />
        </section>
    );
};

PlaceDetail.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    pricePerNight: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    petFriendly: PropTypes.bool.isRequired,
    pool: PropTypes.bool.isRequired,
    wifi: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
}

export default PlaceDetail;
