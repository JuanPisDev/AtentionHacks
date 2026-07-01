import {Link} from 'react-router-dom'
import styles from "./HomeStyles/ServiceButton.module.css"

function ServiceButton({serviceName, serviceLink}) {

  return (
    <>
        <Link className={styles.ServiceButton} to={serviceLink}>{serviceName}</Link>      
    </>
  )
}

export default ServiceButton