import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map(){
    const navigate = useNavigate();
    const [searchParams,SetsearchParams]= useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    return(
        <div className={styles.mapContainer} onClick={()=> navigate("form")}>
            <h1>Map</h1>
            <p>position : {lat},{lng}</p>
        

          <button onClick={()=> SetsearchParams({lat:23,lng:34})} >Chnage Position</button>
        
        </div>
    )
}
export default Map;