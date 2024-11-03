import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, onclick, type }) {
    return (
        <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,     // Ensures children are required and can be any renderable content
    onclick: PropTypes.func.isRequired,       // Ensures onclick is a required function
    type: PropTypes.string                    // Optional, but should be a string
};

export default Button;
