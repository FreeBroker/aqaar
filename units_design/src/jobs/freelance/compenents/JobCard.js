import dateFormat from 'dateformat';
import { link } from '../../config';
import { useNavigate } from 'react-router-dom';

function JobCard(props) {
  const navigate = useNavigate()

  return (
    <div className='job d-flex  flex-grow-1 w-100 ' key={props.id}>
      <img src={`${link}${props.company.image}`} width={100} height={100} />
      <div className='job-description'>
        <h2 className='title' style={{ cursor: "pointer", color: "#b1231b" }} onClick={() => {
          if (props.isHome) {
            navigate(`/jobs/freelancer/jobselected/${props.ad?._id}`)
          } else {
            navigate(`/jobs/freelancer/jobsaved/${props.ad?._id}`)
          }
        }}>{props.ad.title}</h2>
        <p className='location'>{props.ad.location} ({props.ad.place})</p>
        <p className='adrress'>{props.ad.type}</p>
        <p className='time' style={{ color: "#b1231bc1" }}>{dateFormat(props.ad.createdAt, "dd mmm yyyy")}</p>
      </div>
    </div>
  )
}
export default JobCard;