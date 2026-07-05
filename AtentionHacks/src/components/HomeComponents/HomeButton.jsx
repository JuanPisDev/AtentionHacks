import styles from "../AlarmsComponents/AlarmsStyles/HomeButton.module.css"
import {Link} from 'react-router-dom'
function HomeButton() {
return (
    <>
        <Link className={styles.homebutton} to="/">HOME</Link>      
    </>
  )
}

export default HomeButton