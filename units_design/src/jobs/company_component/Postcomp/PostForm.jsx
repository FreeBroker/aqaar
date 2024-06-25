import React, { useState } from 'react';
import './formlogin.css'
import { useNavigate } from 'react-router-dom';
import * as Ads from "../../network/api/ad"

export default function PostForm(props) {
  const navigate = useNavigate()
  const [Workplacetype, setWorkplacetype] = useState('');
  const [Title, setTitle] = useState('');
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOptionChange = (e) => {
    setWorkplacetype(e.target.value);
  };

  const createAd = async () => {
    if (Joblocation && JobLevel && JobType && Title && description && Workplacetype) {
      await Ads.createAd({
        title: Title,
        location: Joblocation,
        place: Workplacetype,
        type: JobType,
        level: JobLevel,
        desc: description
      }).then(respone => {
        if (respone) {
          navigate(-1)
        }
      })
    }
  }

  const [Joblocation, setJoblocation] = useState('');

  const handleJoblocation = (e) => {
    setJoblocation(e.target.value);
  };

  const [JobLevel, setJobLevel] = useState('');

  const handleJobLevel = (e) => {
    setJobLevel(e.target.value);
  };

  const [JobType, setJobType] = useState('');

  const handleJobType = (e) => {
    setJobType(e.target.value);
  };

  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Joblocation && JobLevel && JobType && Title && description && Workplacetype) {
      await Ads.createAd({
        title: Title,
        location: Joblocation,
        place: Workplacetype,
        type: JobType,
        level: JobLevel,
        desc: description
      }).then(respone => {
        navigate(-1);
        window.scrollTo(0,0)
      })
    } else {
      console.log("HHHHHHHHHHH")
    }
  };
  return (

    <div className='form_div ' >

      <div className='form_div-header1'>
        Post a job for free
      </div>
      <div className='form_div-header2'>
        <br />

      </div>
      <form className='form_div_form ' onSubmit={handleSubmit}>
        <div className='label-div'>
          <label htmlFor='Jobtitle' className='input_name'>
            Job title
          </label>
          <input id="Jobtitle" placeholder=' Add the title you are hiring for' type='text' className='label-div-input'
            value={Title} onChange={handleTitle}></input>
        </div>
        <div className='label-div'>
          <label htmlFor='Joblocation' className='input_name'>
            Job location
          </label>
          <input id="Joblocation" placeholder=' Job location' type='text' className='label-div-input'
            value={Joblocation} onChange={handleJoblocation}></input>

        </div>

        <div className='label-div'>
          <label htmlFor='Workplacetype' className='input_name'>
            Workplace type
          </label>

          <select id="Workplacetype" className='label-div-input comp-para ' name="Workplacetype" value={Workplacetype} onChange={handleOptionChange}>
            <option disabled={true} value="">
              --Choose and option--
            </option>
            <option className="comp-para " value="Remote">Remote</option>
            <option className="comp-para " value="Onsite">Onsite</option>
          </select>

        </div>
        <div className='label-div'>
          <label htmlFor='JobType' className='input_name'>
            Job Type
          </label>
          <select id="JobType" className='label-div-input comp-para ' name="JobType" placeholder='Job type' value={JobType} onChange={handleJobType}>
            <option disabled={true} value="">
              --Choose and option--
            </option>
            <option className="comp-para " value="Part time">Part time</option>
            <option className="comp-para " value="Full time">Full time</option>
          </select>
        </div>

        <div className='label-div'>
          <label htmlFor='jobLevel' className='input_name'>
            Job level
          </label>
          <select id="jobLevel" className='label-div-input comp-para ' name="jobLevel" value={JobLevel} onChange={handleJobLevel}>
            <option disabled={true} value="">
              --Choose and option--
            </option>
            <option className="comp-para " value="Entry">Entry</option>
            <option className="comp-para " value="Mid">Mid</option>
            <option className="comp-para " value="Pro">Pro</option>
          </select>

        </div>

        <div className='label-div '>
          <label htmlFor="description" className='input_name'>Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}


            className='w-100'


          />
        </div>
        <button type="submit" className='next-btn '>Add new ad</button>
      </form>

      <button className='back-btn' onClick={() =>{ navigate(-1);window.scrollTo(0,0)}}>Back</button>
    </div>
  )
}
