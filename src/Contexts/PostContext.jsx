import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const PostContext = createContext();

function ContextProvider({ children }) {
    const [cities, setcities] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const BASE_URL = "http://localhost:9000";

    useEffect(function () {
        async function fetchCities() {
            try {
                setisLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setcities(data);
            } catch {
                console.log("There was an error loading data");
            } finally {
                setisLoading(false);
            }
        }
        fetchCities();
    }, []); // Use empty dependency array to run the effect only once

    return (
        <PostContext.Provider value={{ cities, setcities, isLoading, setisLoading }}>
            {children}
        </PostContext.Provider>
    );
}

// Define the prop types for ContextProvider
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Define children prop type
};

function ContextConsume() {
    const context = useContext(PostContext);
    if (context === undefined) throw new Error("Error occur due to Undefined ");
    return context;
}

export { ContextProvider, ContextConsume };
