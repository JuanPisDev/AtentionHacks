function Alarm({name, time, repeat }) {

  return (
    <>
        <div>
            <h1>{name}</h1>
            <h2>{time}</h2>
            <h3>Repeat Daily: {repeat}</h3>
            <button>Edit</button>
        </div>      
    </>
  )
}

export default Alarm