import JobInfo from './JobInfo';
import JobIcon from '../Images/job.svg';
import SkillIcon from '../Images/skills.svg';
import FactoryIcon from '../Images/facetory.svg';
import './jobdetails.css';
import JobAbout from './JobAbout';
import dateFormat from 'dateformat';
import * as Saved from "../../network/api/saved"
import { useEffect, useState } from 'react';

function Jobdetails(props) {
  const [ids, setIds] = useState([])

  const getSaved = () => {
    Saved.getSaved().then(saved => {
      console.log(saved.data)
      setIds(saved.data.response)
    })
  }

  const createSaved = () => {
    Saved.createSaved({ ad_id: props.ad?._id }).then(saved => {
      getSaved()
    })
  }

  const deleteSaved = () => {
    Saved.deleteSaved(props.ad?._id).then(saved => {
      getSaved()
    })
  }

  useEffect(() => {
    getSaved()
  }, [])

  return (
    <div className='job-details flex-shrink-1 '>
      <h1>{props.ad?.title}</h1>
      <div className='job-place-time d-flex flex-wrap flex-column gap-1 '>
        <p style={{margin:"0px"}}>{props.ad?.location}</p>
       
        <p style={{margin:"0px"}}>{dateFormat(props.ad?.createdAt, "dd mmm yyyy")}. </p>
        
        <p style={{margin:"0px"}}> {props.numberOfApplicant} applicants</p>
      </div>
      <JobInfo image={JobIcon} type={`${props.ad?.place}`} />
      <JobInfo image={FactoryIcon} content={`${props.ad?.type}`} />
      <div className='btns d-flex gap-3 w-100 '>
        {props.isApply ? <button className='save-job' disabled>Applyed</button> : <button className='apply me-3' onClick={() => props.setApply(true)}>Easy Apply</button>}
        {ids?.includes(props.ad?._id) ? <button className='save-job mx-3' onClick={() => deleteSaved()}>Saved</button> : <button className='apply mx-3' onClick={() => createSaved()}>Save</button>}
      </div>
      <div className='about'>
        <h3>About the job</h3>
        <JobAbout title='Description:' description={`${props.ad?.desc}`} />
      </div>
    </div>
  )
}
export default Jobdetails;
export const desc = `•Build personas and define and maintain the Jobs to be done for our users. 
  •Conduct user research using various methods, such as interviews, surveys, usability testing, card sorting, etc.
  •Analyze and synthesize user data to create personas that represent our users’ needs, behaviors, and motivations.
  •Define and document the Jobs to be done for each persona using a standardized format.
  •Update and refine the personas and Jobs to be done based on user feedback and product changes.
  •Communicate and share the personas and Jobs to be done with the design and product teams and other stakeholders.
  •Goal: To create user-centric solutions that address our users’ problems and goals.
  •Improve internal design processes and standardize the overall user experience in Jisr.
  •Review and evaluate the current design processes and identify areas for improvement.
  •Research and implement best practices and standards for UX design.
  •Help maintaining the design system that includes UI components, style guides, patterns, etc. This involves integrating insights from a/b testing and taking into account the requirements and preferences of various personas.
  •Ensure consistency and quality across all products and platforms
  •Conduct usability testing and user feedback sessions to measure and improve the user experience
  •Goal: To enhance the usability, accessibility, and aesthetics of our products and services `