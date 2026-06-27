import ServiceButton from "../../components/HomeComponents/ServiceButton"

function Home() {

  return (
    <>
      <h1>Atention Hacks</h1>
      <ServiceButton  serviceName="Pomodoro" />
      <ServiceButton  serviceName="Alarms"/>
      <ServiceButton  serviceName="Meditation"/>
      <ServiceButton  serviceName="Kan"/>
    </>
  )
}

export default Home