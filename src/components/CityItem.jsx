// import styles from './CityItem.module.css';
// function CityItem({city}){
//     const {cityName,emoji,date}= city;
//     return(
//         <li className={styles.cityItem}>
//        <span className={styles.emoji}>{emoji}</span>
//        <h3 className={styles.name}>{cityName}</h3>
//        <time className={styles.time}>{date}</time>

//         </li>
//     )
// }
// export default CityItem;






import PropTypes from 'prop-types';
import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

function CityItem({ city }) {
    const { cityName, emoji, date,id,position } = city;
    return (
        <li >
            {/* Here we link a Route that we used stroing state in url with Link Tag. */}
            <Link  className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng} `}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.time}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
}

// Define prop types for city and its properties
CityItem.propTypes = {
    city: PropTypes.shape({
        cityName: PropTypes.string.isRequired, // Expecting cityName to be a string
        emoji: PropTypes.string.isRequired,    // Expecting emoji to be a string
        date: PropTypes.string.isRequired,     // Expecting date to be a string (you can adjust this if date is an actual Date object)
        id: PropTypes.number.isRequired,
        position:PropTypes.number,
       
    }).isRequired,
};

export default CityItem;
