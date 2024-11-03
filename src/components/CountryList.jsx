import PropTypes from 'prop-types'; // Import PropTypes for validation
import styles from './CountryList.module.css';
import CountryItem from './CountryItem'; // Import CountryItem
import Message from './Message';
import { ContextConsume } from '../Contexts/PostContext';

function CountryList() {
    const {cities} = ContextConsume();
    if (!cities.length) return (
        <Message message="Add Your First City by Clicking on a city map" />
    );

    // Reduce cities to get unique countries with emojis
    const countries = cities.reduce((arr, city) => {
        // Check if the country already exists in arr
        if (!arr.find(el => el.country === city.country)) {
            arr.push({ country: city.country, emoji: city.emoji });
        }
        return arr;
    }, []); // Initialize arr as an empty array

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.country} />
            ))}
        </ul>
    );
}

// Define prop types for validation
CountryList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            country: PropTypes.string.isRequired,
            emoji: PropTypes.string.isRequired,
        })
    ).isRequired, // Expecting cities to be an array of objects with country and emoji
};

export default CountryList;

