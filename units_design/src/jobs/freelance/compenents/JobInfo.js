function JobInfo(props) {
  return (
    <div className="job-info d-flex align-items-center gap-3">
      <img src={props.image} className="align-self-start"/>
      {props.type != null &&
        <p className='job-type'>{props.type}</p>
      }
      <p> {props.content}</p>
    </div>
  )
}
export default JobInfo;