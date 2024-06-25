import UnitCardAll from "./UnitCardAll";
import { proxy } from "../../config";
import Spinner from "../Spinner";

export default function UnitsCards({ fav, units, update_favorites, favorites, myUnits }) {
  if (!units) return <Spinner />;

  return (
    <div className="row">
      {units?.map((item, index) => (
        <div key={item?._id} className="col-lg-4 col-md-3 col-sm-12 my-2 mx-0 d-flex justify-content-center">
          <UnitCardAll
            id={item?._id}
            destination={`/details/${item?._id}`}
            adname={item?.adname}
            area={item?.size}
            price={item?.price?.value}
            imagee={proxy + "/" + item?.images[0]}
            description={item?.description}
            unitCode={item?.unitCode} // Pass unitCode as a prop
            update_favorites={update_favorites}
            favorites={favorites}
            myUnits={myUnits}
          />
        </div>
      ))}
    </div>
  );
}
