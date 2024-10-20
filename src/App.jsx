import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="app" element={<AppLayout />} >
            <Route index path="cities" element={<p>List of Cities</p>} />
            <Route  path="cities" element={<p>List of Cities</p>} />
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