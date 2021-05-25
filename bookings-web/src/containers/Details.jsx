import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { getOnePlace } from '../services/placesApi';
import PlaceDetail from '../components/places/PlaceDetail';
import Loading from '../components/Loading/Loading';

const Details = (props) => {
    const [place, setPlace] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOnePlace(props.match.params.id)
            .then(setPlace)
            .finally(() => setLoading(false))
    }, []);
    
    if (loading) return <Loading />;

    return (
        <PlaceDetail {...place} />
    );
};

export default Details;


// const Details = () => {
//     const { id } = useParams();
//     const [place, setPlace] = useState({});
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         getOnePlace(id)
//             .then(setPlace)
//             .finally(() => setLoading(false))
//     }, []);
    
//     if (loading) return <Loading />;

//     return (
//         <PlaceDetail {...place} />
//     );
// };

// export default Details;
