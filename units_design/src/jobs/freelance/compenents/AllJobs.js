import "./alljobs.css";
import Image from "../Images/crossover.jpeg";
import JobCard from "./JobCard";
import * as Ads from "../../network/api/ad";
import { getMySaved } from "../../network/api/saved";
import { useEffect, useState } from "react";
import * as Freelancer from "../../network/api/freelance"

function AllJobs(props) {
  const [profile, setProfile] = useState({})
  const [allAds, setAllAds] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [mySaved, setMySaved] = useState([]);
  const [companiesMySaved, setCompaniesMySaved] = useState([]);
  const [description, setdescription] = useState(false);
  const [applicants, setapplicants] = useState(true);

  const getAllAds = async () => {
    await Ads.getAllAds().then(async (result) => {
      setAllAds(result.data.response);
      setCompanies(result.data.companies);
    });
  };
  const getSaved = () => {
    getMySaved().then((saved) => {
      setMySaved(saved.data.response);
      setCompaniesMySaved(saved.data.companies);
    });
  };
  const getProfile = async () => {
    await Freelancer.getProfile().then(async (result) => {
      setProfile(result.data.response)
    })
  }
  useEffect(() => {
    getAllAds();
    getSaved();
  }, []);
  const showdescpition = () => {
    setdescription(true);
    setapplicants(false);
  };

  const showapplicants = () => {
    setapplicants(true);
    setdescription(false);
  };

  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const getItemClass = (index) => {
    return index === activeItem ? "my-items-item-divs" : "my-items-item-div";
  };

  const getNumClass = (index) => {
    return index === activeItem ? "my-items-items" : "my-items-item";
  };
  const getItemClass2 = (index) => {
    return index === activeItem ? 'my-items-item-divs2' : 'my-items-item-div2';
  };

  const getNumClass2 = (index) => {
    return index === activeItem ? 'my-items-items' : 'my-items-item';
  };
  useEffect(() => {
    getProfile()
  })
  ///////////////////////////
  return (
    <div className="all-jobs">
      <div className="container d-flex flex-column flex-lg-row gap-3 p-0">
        <div className='my-items2 ' >
          <div
            className={getItemClass2(1)}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleItemClick(1);
              showapplicants();
            }}
          >
            <div className={getNumClass2(1)}>
              {activeItem ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
              )}
              <span> All Jobs </span>
            </div>
            <div className="my-items-item-num">{allAds?.length}</div>
          </div>
          <div
            className={getItemClass2(0)}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleItemClick(0);
              showdescpition();
            }}
          >
            <div className={getNumClass2(0)}>
              {activeItem ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z"
                    fill="#70725D"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z"
                    fill="#b1231b"
                  />
                </svg>
              )}
              <span> My Jobs </span>
            </div>
            <div className="my-items-item-num">{mySaved?.length}</div>
          </div>
        </div>
        <div className="d-flex  justify-content-start gap-2 flex-column it-div " >

          <div className="my-items" >
            <div
              className={getItemClass(1)}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleItemClick(1);
                showapplicants();
              }}
            >
              <div className={getNumClass(1)}>
                {activeItem ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                )}
                <span> All Jobs </span>
              </div>
              <div className="my-items-item-num">{allAds?.length}</div>
            </div>

            <div className="my-items-line my-2"></div>


            <div
              className={getItemClass(0)}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleItemClick(0);
                showdescpition();
              }}
            >
              <div className={getNumClass(0)}>
                {activeItem ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z"
                      fill="#70725D"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M13.75 1.53337H5.71667C3.95 1.53337 2.5 2.98338 2.5 4.75004V16.4917C2.5 17.9917 3.575 18.625 4.89167 17.9L8.95833 15.6417C9.39167 15.4 10.0917 15.4 10.5167 15.6417L14.5833 17.9C15.9 18.6334 16.975 18 16.975 16.4917V4.75004C16.9667 2.98338 15.525 1.53337 13.75 1.53337ZM12.75 7.46671L9.41667 10.8C9.29167 10.925 9.13333 10.9834 8.975 10.9834C8.81667 10.9834 8.65833 10.925 8.53333 10.8L7.28333 9.55004C4.16667 12.9 4.34167 13.1417 4.58333 12.9C4.825 12.6584 6.425 13.075 6.66667 13.3167L8.95833 13.7334L11.6667 13.75C11.6667 20.0667 13.5083 8.50837 13.75 8.75004C12.0833 10 12.9917 7.22504 12.75 7.46671Z"
                      fill="#b1231b"
                    />
                  </svg>
                )}
                <span> My Jobs </span>
              </div>
              <div className="my-items-item-num">{mySaved?.length}</div>
            </div>


          </div>

          <div className="my-item ">
            <div className="my-items-item1"

            >
              Welcome {profile.name} !</div>
            <div className="my-items-item2" >Open to work
            </div>
          </div>
        </div>


        {applicants && (
          <div className="jobs item py-3 mx-lg-2 mb-2 flex-grow-1 d-flex flex-column  " style={{background:'white'}} >
            {allAds.map((ad, index) => (
              <JobCard
                key={index}
                ad={ad}
                company={companies[index]}
                isHome={true}
              />
            ))}
          </div>
        )}

        {description && (
          <div className=" jobs item py-3 mx-lg-2 mb-2 flex-grow-1 d-flex flex-column  " style={{background:'white'}}>
            {mySaved.map((ad, index) => (
              <JobCard
                key={index}
                ad={ad}
                company={companiesMySaved[index]}
                isHome={false}
              />
            ))}
          </div>
        )}
        <div className="notes">
          <div className="note item align-self-start py-4 px-3 d-flex flex-column align-items-start m-0">
            <h3>Job seeker guidance</h3>
            <span>Recommended based on your activity</span>
            <p>
              Explore our curated guide of expert-led courses, such as how to
              improve your resume and grow your network, to help you land your
              next opportunity.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}
export default AllJobs;

const list = [
  {
    Id: 1,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 2,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 3,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 4,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 5,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 6,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 7,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 8,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 9,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 10,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 11,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 12,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 13,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 14,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 15,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 16,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 17,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 18,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 19,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 20,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 21,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 22,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 23,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 24,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 25,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 26,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
  {
    Id: 27,
    Image: Image,
    Title: "Software Engineering Manager, Trilogy (Remote) - $100,000/year USD",
    Location: "Crossover",
    Address: "El Maadi El Gadida, Cairo, Egypt (On-site)",
    Time: "4 hours ago",
  },
];
