// import styles from "./Message.module.css";

// function Message({ message }) {
//   return (
//     <p className={styles.message}>
//       <span role="img">👋</span> {message}
//     </p>
//   );
// }

// export default Message;


import PropTypes from 'prop-types';
import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

// Define prop types for message
Message.propTypes = {
  message: PropTypes.string.isRequired, // Expecting message to be a string and required
};

export default Message;
