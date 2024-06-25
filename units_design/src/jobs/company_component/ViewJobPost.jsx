import React, { useEffect, useState } from 'react';
import "./style.css"
import { useParams } from 'react-router-dom';
import * as Ads from "../network/api/ad"
import * as Applicant from "../network/api/applicant"
import { link } from '../config';
import documentsvgrepocom from '../NotFound/img/documentsvgrepocom.svg'

function ViewJobPost() {
  const [description, setdescription] = useState(true);
  const [applicants, setapplicants] = useState(false);

  let { id } = useParams()

  const showdescpition = () => {
    setdescription(true);
    setapplicants(false);
  };

  const showapplicants = () => {
    setapplicants(true);
    setdescription(false);

  };

  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const getItemClass = (index) => {
    return index === activeItem ? 'act-desc-btn' : 'desc-btn';
  };

  const [ad, setAd] = useState({})
  const [company, setCompany] = useState({})
  const [numberOfApplicant, setNumberOfApplicant] = useState(0)
  const [applicant, setApplicants] = useState([])
  const getAd = async () => {
    await Ads.getAd(id).then(async (result) => {
      setAd(result.data.response)
      setCompany(result.data.company)
      console.log(result.data)
    })
  }

  const getApplicants = async () => {
    await Applicant.getApplicantsOfAd(id).then(async (result) => {
      setNumberOfApplicant(result.data.response.length)
      setApplicants(result.data.response)
      console.log(result.data.response)
    })
  }

  useEffect(() => {
    getAd()
    getApplicants()
  }, [id])

  return (
    <div className='w-100 d-flex justify-content-center flex-column' style={{ backgroundColor: "#f3f2ee", alignItems: "center" }}>
      <div className='swiper-div w-100 d-flex justify-content-center  ' style={{ alignItems: "flex-end" }}>
        <div className='swiper-div  '>
          <div style={{ gap: "1rem"}}>
          <button className={getItemClass(0)} onClick={() => { handleItemClick(0); showdescpition(); }}>Description</button>
          <button className={getItemClass(1)} onClick={() => { handleItemClick(1); showapplicants(); }}>Applicants</button>
       
          </div>
            <div className='ViewJobPost-app2 '>  <span className=' ViewJobPost-app-par2 '>Applicant</span> <p className='ViewJobPost-app-para text-dark m-0 ' >{numberOfApplicant}</p></div>

        </div>
      </div>
      <div className='w-100 d-flex  justify-content-center flex-column my-5' style={{ backgroundColor: "#f3f2ee", alignItems: "center" }}>

        <div className='ViewJobPost-div '>
          {description && (
            <div className='ViewJobPost-discription-div' style={{ padding: "1rem" }}>
              <h1 className='ViewJobPost-discription-h'>{ad?.title}</h1>
              <div className='ViewJobPost-discription-line my-3'></div>
              <h3 className='ViewJobPost-discription-h2'>Description :</h3>
              <div className='ViewJobPost-discription-data-div'>
                <h5 className='ViewJobPost-discription-data '>

                  {ad?.desc}
                </h5>
                <div className='ViewJobPost-discription-data2'>
                  <p className='data2'>{ad?.type}</p>
                  <p className='data2'>{company?.name}</p>
                  <p className='data2'>{ad?.place}</p>

                </div>
              </div>
            </div>
          )}
          {applicants && (
            <div className='ViewJobPost-discription-div '>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th className='col11'>num</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>resume</th>
                  </tr>
                </thead>
                <tbody>
                  {applicant?.map((app, index) => (
                    <tr key={index}>
                      <td className='col11'>{index + 1}</td>
                      <td>{app.name}</td>
                      <td>{app.email}</td>
                      <td>{app.phone}</td>
                      <td><a href={`${link}${app.resume}`} target="_blank"><img src={documentsvgrepocom} style={{width:"2rem",height:"2rem"}}></img></a></td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}


          <div className='ViewJobPost-app-div '>
            <div className='ViewJobPost-app'> <p className='ViewJobPost-app-para '>{numberOfApplicant}</p> <span className=' ViewJobPost-app-par2 '>Applicant</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewJobPost
