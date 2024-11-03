// import styles from './CityList.module.css';
// import Spinner from './Spinner';
// function CityList({cities,isLoading}){
//     if(isLoading) return  <Spinner />
//     return(
//         <ul  className={styles.CityList}>{cities.map((city) => (<CityItem  city={city} key={city.id} />))}</ul>

//     )
// }
// export default CityList;





// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import styles from './CityList.module.css';
// import Spinner from './Spinner';
import CityItem from './CityItem'; // Import CityItem
import Message from './Message';
import { ContextConsume } from '../Contexts/PostContext';

function CityList() {
    const {cities}= ContextConsume();
    // if (isLoading) return <Spinner />;

    if(!cities.length) return (
        <Message  message="Add Your First City by Clicking on a city map" />
    )
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    );
}

// Define prop types for validation
CityList.propTypes = {
    cities: PropTypes.array.isRequired,      // Expecting cities to be an array
    isLoading: PropTypes.bool.isRequired,    // Expecting isLoading to be a boolean
};

export default CityList;
