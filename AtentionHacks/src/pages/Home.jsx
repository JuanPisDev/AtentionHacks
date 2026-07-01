import ServiceButton from "../components/HomeComponents/ServiceButton"
import styles from "../components/HomeComponents/HomeStyles/HomeStyles.module.css"

function Home() {

  return (
    <div className={styles.home}>
      <div className={styles.menu}>
        <h1 className={styles.title}>Atention Hacks</h1>
        <div className={styles.serviceSection}>
        <ServiceButton className={styles.serviceButton} serviceLink="" serviceName="Pomodoro" />
        <ServiceButton className={styles.serviceButton} serviceLink="/alarms" serviceName="Alarms"/>
        <ServiceButton className={styles.serviceButton} serviceLink="" serviceName="Meditation"/>
        <ServiceButton className={styles.serviceButton} serviceLink="" serviceName="KanBan"/>
        </div>
      </div>
    </div>
  )
}

export default Home