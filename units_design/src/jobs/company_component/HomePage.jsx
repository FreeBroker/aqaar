
import React, { useEffect, useState } from 'react';
import * as Ads from "../network/api/ad"
import * as Company from "../network/api/company"
import * as Applicant from "../network/api/applicant"
import dateFormat from 'dateformat';
import "./style.css"
import { link } from '../config';
import { useNavigate } from 'react-router-dom';
import trashsvgrepocom from '../NotFound/img/trashsvgrepocom.svg'
export default function HomePage() {

  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(0);
  const [myAds, setMyAds] = useState([])
  const [myProfile, setMyProfile] = useState({})
  const [numberApplicant, setNumberApplicant] = useState(0)

  const getMyAds = async () => {
    await Ads.getMyAds().then(async (result) => {
      setMyAds(result.data.response)
    })
  }

  const deleteAd = async (id) => {
    await Ads.deleteAd(id).then(async (result) => {
      getMyAds()
      getMyProfile()
      getNumberOfAllApplicants()
      window.scrollTo(0, 0)
    })
  }

  const getMyProfile = async () => {
    await Company.getMyProfile().then(async (result) => {
      setMyProfile(result.data.response)
    })
  }

  const getNumberOfAllApplicants = async () => {
    await Applicant.getNumberOfAllApplicants().then(async (result) => {
      setNumberApplicant(result.data.response)
    })
  }

  useEffect(() => {
    getMyAds()
    getMyProfile()
    getNumberOfAllApplicants()
  }, [])

  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };


  const getItemClass2 = (index) => {
    return index === activeItem ? 'my-items-item-divs2' : 'my-items-item-div2';
  };

  const getNumClass2 = (index) => {
    return index === activeItem ? 'my-items-items' : 'my-items-item';
  };
  return (
    <div className='d-flex  justify-content-center flex-wrap homediv '>
      <div className='diiv  flex-wrap d-flex justify-content-between'>
        <div className='my-items2 '>
          <div className={getItemClass2(0)} style={{ cursor: "pointer" }} onClick={() => handleItemClick(0)}>
            <div className={getNumClass2(0)}>
              {activeItem ?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z" fill="#70725D" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z" fill="#b1231b" />
                </svg>}
              <span> My items </span>
            </div>
          </div>

          <div className="my-items-item-div2" style={{ cursor: "pointer" }} >
            <div className='my-items-item'>
              Posted Jobs
            </div>
            <div className='my-items-item-num'>{myAds?.length}</div>
          </div>

          <div className="my-items-item-div2" style={{ cursor: "pointer" }} >
            <div className='my-items-item'>
              Applicants
            </div>
            <div className='my-items-item-num'>{numberApplicant}</div>
          </div>
        </div>

        <div className='my-items '>
          <div className='my-items-item-divs'  >
            <div className='my-items-items'>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z" fill="#b1231b" />
              </svg>

              <span> My items </span>
            </div>
          </div>

          <div className='my-items-item-div'>
            <div className='my-items-item'>
              Posted Jobs
            </div>
            <div className='my-items-item-num'>{myAds?.length}</div>
          </div>

          <div className='my-items-item-div'>
            <div className='my-items-item'>
              Applicants
            </div>
            <div className='my-items-item-num'>{numberApplicant}</div>
          </div>
        </div>
        {/* ///////////////////////////////// */}
        {/* <div className='my-items'>
          <div className={getItemClass(0)} style={{ cursor: "pointer" }} onClick={() => handleItemClick(0)}>
            <div className={getNumClass(0)}>
              {activeItem ?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z" fill="#70725D" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z" fill="#b1231b" />
                </svg>}
              <span> My items </span>
            </div>
          </div>
          <div className='my-items-line'></div>
          <div className={getItemClass(1)} style={{ cursor: "pointer" }} onClick={() => handleItemClick(1)}>
            <div className={getNumClass(1)}>
              Posted Jobs
            </div>
            <div className='my-items-item-num'>{myAds?.length}</div>
          </div>
          <div className='my-items-line'></div>
          <div className={getItemClass(2)} style={{ cursor: "pointer" }} onClick={() => handleItemClick(2)}>
            <div className={getNumClass(2)}>
              Applicants
            </div>
            <div className='my-items-item-num'>{numberApplicant}</div>
          </div>
        </div> */}



        <div className='posted_jobs  '>
          <div className='posted_jobs-header '>
            <div>Posted Jobs </div>
            <div className='post_ajob2  '>
              <button className='post_ajob-btn2  ' onClick={() => { navigate("/jobs/company/post") }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                  <path d="M9.625 10.5833H1.375C1.18708 10.5833 1.03125 10.4274 1.03125 10.2395C1.03125 10.0516 1.18708 9.89575 1.375 9.89575H9.625C9.81292 9.89575 9.96875 10.0516 9.96875 10.2395C9.96875 10.4274 9.81292 10.5833 9.625 10.5833Z" fill="#b1231b" />
                  <path d="M8.71703 2.09493C7.82786 1.20576 6.95703 1.18285 6.04494 2.09493L5.49036 2.64951C5.44453 2.69535 5.42619 2.76868 5.44453 2.83285C5.79286 4.04743 6.76453 5.0191 7.97911 5.36743C7.99744 5.37201 8.01578 5.3766 8.03411 5.3766C8.08453 5.3766 8.13036 5.35826 8.16703 5.3216L8.71703 4.76701C9.17078 4.31785 9.39078 3.88243 9.39078 3.44243C9.39536 2.98868 9.17536 2.54868 8.71703 2.09493Z" fill="#b1231b" />
                  <path d="M7.15481 5.78462C7.02189 5.72045 6.89356 5.65628 6.76981 5.58295C6.66898 5.52337 6.57273 5.4592 6.47648 5.39045C6.39856 5.34003 6.30689 5.2667 6.21981 5.19337C6.21064 5.18878 6.17856 5.16128 6.14189 5.12462C5.99064 4.99628 5.82106 4.83128 5.66981 4.64795C5.65606 4.63878 5.63314 4.6067 5.60106 4.56545C5.55523 4.51045 5.47731 4.41878 5.40856 4.31337C5.35356 4.24462 5.28939 4.14378 5.22981 4.04295C5.15648 3.9192 5.09231 3.79545 5.02814 3.66712C4.94401 3.48684 4.7074 3.43328 4.56672 3.57396L1.98939 6.15128C1.92981 6.21087 1.87481 6.32545 1.86106 6.40337L1.61356 8.15878C1.56773 8.47045 1.65481 8.76378 1.84731 8.96087C2.01231 9.12128 2.24148 9.20837 2.48898 9.20837C2.54398 9.20837 2.59898 9.20378 2.65398 9.19462L4.41398 8.94712C4.49648 8.93337 4.61106 8.87837 4.66606 8.81878L7.24764 6.2372C7.3855 6.09934 7.3337 5.86214 7.15481 5.78462Z" fill="#b1231b" />
                </svg> Post a job
              </button>
            </div>
          </div>
          {myAds.map((ad, index) => (<div className='d-flex flex-column w-100' style={{ gap: "1.19rem" }}>
            <div className='posted_jobs-post-div ' key={index}>
              <div className='posted_jobs-line  my-3 w-100'></div>
              <div className='posted_jobs-post flex-wrap justify-content-between w-100'>
                <div className='posted_jobs-post '>

                  <div className='posted_jobs-post-img'>
                    <img className='posted_jobs-post-img' src={`${link}${myProfile?.image}`}></img>
                  </div>
                  <div className='posted_jobs-post-data'>
                    <div className='title' style={{ cursor: "pointer" }} onClick={() => {
                      navigate(`/jobs/ViewJobPost/${ad._id}`);
                      window.scrollTo(0, 0)
                    }}>
                      {ad.title}
                    </div>
                    <div className='post-company-name'>
                      {myProfile?.name}
                    </div>
                    <div className='post-company-location'>
                      {ad.location} ({ad.place})
                    </div>
                    <div className='post-post-date'>
                      {dateFormat(ad.createdAt, "dd mmm yyyy")}
                    </div>
                  </div>
                </div>
                <div>
                  <img style={{ width: "1.2rem", height: "2.4rem", cursor: "pointer" }} src={trashsvgrepocom} alt="Not Found"
                    type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}
                  // onClick={() => {
                  //   deleteAd(ad._id)
                  // }} 
                  />
                </div>
              </div>
            </div>
            <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${index}`} aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id={`exampleModalLabel${index}`}>{ad.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to delete this Job!
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button
                      type="button"
                      className="btn "style={{color: "#fff",backgroundColor: "#B79763",borderColor: "#B79763"
                    }}
                      onClick={() => {
                        deleteAd(ad._id)
                      }}
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          ))}
        </div>

        <div className='post_ajob '>

          <button className='post_ajob-btn' onClick={() => { navigate("/jobs/company/post"); window.scrollTo(0, 0) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
              <path d="M9.625 10.5833H1.375C1.18708 10.5833 1.03125 10.4274 1.03125 10.2395C1.03125 10.0516 1.18708 9.89575 1.375 9.89575H9.625C9.81292 9.89575 9.96875 10.0516 9.96875 10.2395C9.96875 10.4274 9.81292 10.5833 9.625 10.5833Z" fill="#b1231b" />
              <path d="M8.71703 2.09493C7.82786 1.20576 6.95703 1.18285 6.04494 2.09493L5.49036 2.64951C5.44453 2.69535 5.42619 2.76868 5.44453 2.83285C5.79286 4.04743 6.76453 5.0191 7.97911 5.36743C7.99744 5.37201 8.01578 5.3766 8.03411 5.3766C8.08453 5.3766 8.13036 5.35826 8.16703 5.3216L8.71703 4.76701C9.17078 4.31785 9.39078 3.88243 9.39078 3.44243C9.39536 2.98868 9.17536 2.54868 8.71703 2.09493Z" fill="#b1231b" />
              <path d="M7.15481 5.78462C7.02189 5.72045 6.89356 5.65628 6.76981 5.58295C6.66898 5.52337 6.57273 5.4592 6.47648 5.39045C6.39856 5.34003 6.30689 5.2667 6.21981 5.19337C6.21064 5.18878 6.17856 5.16128 6.14189 5.12462C5.99064 4.99628 5.82106 4.83128 5.66981 4.64795C5.65606 4.63878 5.63314 4.6067 5.60106 4.56545C5.55523 4.51045 5.47731 4.41878 5.40856 4.31337C5.35356 4.24462 5.28939 4.14378 5.22981 4.04295C5.15648 3.9192 5.09231 3.79545 5.02814 3.66712C4.94401 3.48684 4.7074 3.43328 4.56672 3.57396L1.98939 6.15128C1.92981 6.21087 1.87481 6.32545 1.86106 6.40337L1.61356 8.15878C1.56773 8.47045 1.65481 8.76378 1.84731 8.96087C2.01231 9.12128 2.24148 9.20837 2.48898 9.20837C2.54398 9.20837 2.59898 9.20378 2.65398 9.19462L4.41398 8.94712C4.49648 8.93337 4.61106 8.87837 4.66606 8.81878L7.24764 6.2372C7.3855 6.09934 7.3337 5.86214 7.15481 5.78462Z" fill="#b1231b" />
            </svg> Post a free job
          </button>


        </div>
      </div>




    </div>
  )
}

