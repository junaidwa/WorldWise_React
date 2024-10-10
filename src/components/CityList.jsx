import Spinner from './Spinner';
import styles from './CityList.module.css';
import CityItme from './CityItme';
function CityList({cities,isloading}){
    if(isloading) return <Spinner /> ;
    return(
        <ul className={styles.cityList}>
        {cities.map(city =>  <CityItme  city={city} key={city.id}/> )}
        </ul>

    )
}
export default CityList;