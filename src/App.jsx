import Homepage from "./pages/Homepage";
import Product from "./components/Product";
import { Routes, Route, useActionData } from "react-router-dom"; 
import Pricing from './components/Pricing'; 
import Login from './components/Login'; 
import AppLayout from './pages/AppLayout'; 
import PageNotFound from './pages/PageNotFound';
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import { isDepsOptimizerEnabled } from "vite";


function App() {
  const [cities,setcities] = useState([]);
  const [isloading,setIsloading] = useState(false);

  const BASE_URL = "http://localhost:9000";

  useEffect(function(){
   async function FetchCites() {
    try{
      setIsloading(true);
      const res = await fetch(`${BASE_URL}/cities`);
      const data = res.json();
      setcities(data);
    }catch{
      alert("There was an error loading data ...");
    }
    finally{
      setIsloading(false);
    }
    
   }
  FetchCites();

  },[])


  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="Product" element={<Product />} />
      <Route path="Pricing" element={<Pricing />} />
      <Route path="Login" element={<Login />} />
      <Route path="app" element={<AppLayout />} >

      <Route  index element={<CityList  cities={cities} isloading={isloading}/>} /> 
      {/* Index means by default List show on screen. */}

      <Route path="cities" element={<CityList   cities={cities} isloading={isloading}/>} />
      <Route path="countries" element={<p>List of Countries</p>} />
      <Route path="form" element={<p>Form</p>} />
      
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

//Important Rule:
// You should ensure that the BrowserRouter component is only used once in your app, likely at the top level (like in index.js or App.js). If you have already wrapped your app in a BrowserRouter elsewhere (e.g., in index.js), then you don't need to include it again in App.js

