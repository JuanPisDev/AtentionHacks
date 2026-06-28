import {Link} from 'react-router-dom'
function ServiceButton({serviceName, serviceLink}) {

  return (
    <>
        <a href={serviceLink}>{serviceName}</a>      
    </>
  )
}

export default ServiceButton