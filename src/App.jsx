import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from './components/City';
import Form from './components/Form';

// import { ContextConsume} from "./Contexts/PostContext";







function App(){
   

   

    return(
       
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="app" element={<AppLayout />} >
            <Route index  element={<Navigate replace to="cities" />} />
            {/* Index means by default cities show on screenn */}
            <Route  path="cities" element={<CityList   />} />
            {/* Here we create a new Route for storing state in Url. For this first of all create new Route and link to it route. */}
             <Route  path="cities/:id" element={<City/>} />
            <Route  path="countries" element={<CountryList   />} />
            <Route  path="form" element={<Form />} />
            
            </Route>
           
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />

        </Routes>
        </BrowserRouter>
       
        

    )
}
export default App;