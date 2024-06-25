function JobAbout(props){
  return(
    <div className="job-desc ">
      <h4>{props.title}</h4>
      <p className="ViewJobPost-discription-data w-100 ">{props.description}</p>
    </div>
  )
}
export default JobAbout;