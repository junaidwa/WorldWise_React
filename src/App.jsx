import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from "./components/CityList";
import { useEffect, useState } from "react";



const BASE_URL ="http://localhost:9000";
function App(){
    const [cities,setcities]= useState([]);
    const [isLoading,setisLoading]= useState(false);
    useEffect(function(){
        async function fetchCities() {
            try{
                setisLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setcities(data);
         

            }
            catch{
                console.log("There was an error loading data");
            }
            finally{
                setisLoading(false);
            }

            
        }
        fetchCities();
    })

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="app" element={<AppLayout />} >
            <Route index  element={<CityList cities={cities} isLoading={isLoading} />} />
            {/* Index means by default cities show on screenn */}
            <Route  path="cities" element={<CityList  cities={cities} isLoading={isLoading} />} />
            <Route  path="countries" element={<p>List of Countries</p>} />
            <Route  path="form" element={<p>Form</p>} />
            
            </Route>
           
           
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />

        </Routes>
        </BrowserRouter>
        

    )
}
export default App;