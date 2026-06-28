import ServiceButton from "../components/HomeComponents/ServiceButton"
function Home() {

  return (
    <>
      <h1>Atention Hacks</h1>
      <ServiceButton serviceLink="" serviceName="Pomodoro" />
      <ServiceButton serviceLink="/alarms" serviceName="Alarms"/>
      <ServiceButton serviceLink="" serviceName="Meditation"/>
      <ServiceButton serviceLink="" serviceName="KanBan"/>

    </>
  )
}

export default Home