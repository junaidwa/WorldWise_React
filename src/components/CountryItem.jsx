// import styles from "./CountryItem.module.css";

// function CountryItem({ country }) {
//   return (
//     <li className={styles.countryItem}>
//       <span>{country.emoji}</span>
//       <span>{country.country}</span>
//     </li>
//   );
// }

// export default CountryItem;



import PropTypes from 'prop-types'; // Import PropTypes for validation
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

// Define prop types for validation
CountryItem.propTypes = {
  country: PropTypes.shape({
    emoji: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
