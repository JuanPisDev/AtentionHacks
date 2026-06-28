function Alarm({hour, minute, am_pm }) {

  return (
    <>
        <div>
            <h2>{hour}:{minute} {am_pm}</h2> 
            <button>Edit</button>
        </div>      
    </>
  )
}

export default Alarm