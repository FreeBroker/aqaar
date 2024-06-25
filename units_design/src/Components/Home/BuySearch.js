import React from "react";
import { filter, getlocations } from "../../api/unit";
import { useNavigate } from "react-router-dom";

export default function BuySearch({ type }) {
  const types = ["Apartment", "Commercial", "Land", "Town House" , "Twin House" , "Stand alone", "Villa","Quadro","Chalet","Triplex","Douplex","Penthouse","Sky loft","Grond","Studio", "Clinics"];
  const rooms = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];
  const bathrooms = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const type1 = ["Primary", "Resale"];
  const [locations, setlocations] = React.useState([]);
  React.useEffect(() => {
    getlocations().then((result) => {
      setlocations(result.data.response);
    });
  }, []);
  const navigate = useNavigate();
  const [formdata, setFormdata] = React.useState({ selltype: type,location:"" });

  const handelsubmit = (e) => {
    e.preventDefault();
    filter(formdata).then((result) => {
      navigate("/query", {
        state: { formdata: formdata, units: result.data.response },
      });
    });
  };
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    if (+value >= 0) {
      setFormdata({ ...formdata, [name]: +value });
    } else {
      setFormdata({ ...formdata, [name]: 0 });
    }
  };
  return (
    <form className=" px-3 py-2  m-sm-3 " onSubmit={handelsubmit}>
      <div className="form-row">
        <div className="form-group col-lg-2 col-md-12 col-sm-12 ">
          {/* <label className="font-weight-bold  text-light" for="type">
            Type
          </label> */}
          <select
            className="form-select form-control form-select-lg "
            aria-label=".form-select-lg example"
            name="type2"
            onChange={handleTextChange}
          >
            {types.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        {/* <input
          type="text"
          className="form-control mx-1 my-1 col-lg-3 col-md-12 col-sm-12"
          placeholder="Where are you looking?"
          name="location"
          value={formdata.location}
          onChange={handleTextChange}
        /> */}
        <select
          className="form-control mx-1 my-1 col-lg-3 col-md-12 col-sm-12"
          aria-label=".form-select-lg example"
          name="location"
          onChange={handleTextChange}
        >
          {locations.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        <input
          type="number"
          className="form-control mx-1 my-1 col-lg-2 col-md-5 col-sm-5"
          placeholder="Min Price"
          name="minPrice"
          value={formdata.minPrice}
          onChange={handleNumberChange}
        />

        <input
          type="number"
          className="form-control mx-1 my-1 col-lg-2 col-md-5 col-sm-5"
          placeholder="Max Price"
          name="maxPrice"
          value={formdata.maxPrice}
          onChange={handleNumberChange}
        />
        <input
          type="number"
          className="form-control mx-1 my-1 col-lg-2 col-md-5 col-sm-5"
          placeholder="Min Area"
          name="minArea"
          value={formdata.minArea}
          onChange={handleNumberChange}
        />
        <input
          type="number"
          className="form-control mx-1 my-1 col-lg-2 col-md-5 col-sm-5"
          placeholder="Max Area"
          name="maxArea"
          value={formdata.maxArea}
          onChange={handleNumberChange}
        />
        <select
          className="form-select form-control form-select-lg mx-1 my-1 col-lg-2 col-md-5 col-sm-5"
          aria-label=".form-select-lg example"
          name="rooms"
          onChange={handleTextChange}
        >
          {rooms.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <select
          className="form-select form-control form-select-lg mx-1 my-1 col-lg-2 col-md-5 col-sm-5"
          aria-label=".form-select-lg example"
          name="bathrooms"
          onChange={handleTextChange}
        >
          {bathrooms.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <select
          className="form-select form-control form-select-lg mx-1 my-1 col-lg-2 col-md-5 col-sm-5"
          aria-label=".form-select-lg example"
          name="type"
          onChange={handleTextChange}
        >
          {type1.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        {/* className="col-md-12 mt-2" */}
        <div className="col-lg-1 col-md-12 my-1">
          <button className="btn w-100 h-100"style={{color: "#fff",backgroundColor: "#000",borderColor: "#B79763"
        }}>
            <i class="fas fa-search fa-lg d-none d-lg-block center"></i>
            <label className="d-block d-lg-none">Search</label>
          </button>
        </div>
      </div>
    </form>
  );
}
