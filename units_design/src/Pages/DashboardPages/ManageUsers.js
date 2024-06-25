import React from "react";
import SearchBar from "../../Components/Dashboard/SearchBar";
import { Link } from "react-router-dom";
import { getallusers, banuser, unbanuser } from "../../api/user";

export default function ManageUsers() {
  const [userlist, setUserlist] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const getlist = async () => {
    try {
      const result = await getallusers();
      setUserlist(result.data.response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getlist();
  }, []);

  const BanAction = async (id, ban) => {
    try {
      if (ban) {
        await unbanuser(id);
      } else {
        await banuser(id);
      }
      getlist();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="my-4">
      <div className="w-75 m-auto">
        <SearchBar />
        <div className="w-100">
          {userlist.map((item) => (
            <div className="card my-3 w-100" key={item._id}>
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <div className="row">
                  <h6 className="col-lg-3 col-md-6 col-sm-12">{item.email}</h6>
                  <h6 className="col-lg-3 col-md-6 col-sm-12">{item.phone}</h6>
                  <h6 className="col-lg-3 col-md-6 col-sm-12">
                    {new Date(item.dateOfBirth).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h6>
                  <h6 className="col-lg-3 col-md-6 col-sm-12">{item.gender}</h6>
                </div>
                <button
                  className="btn mx-2"
                  style={{
                    color: "#fff",
                    backgroundColor: "#B79763",
                    borderColor: "#B79763",
                  }}
                  onClick={() => BanAction(item._id, item.ban)}
                >
                  {item.ban ? "Unban" : "Ban"}
                </button>
                <Link
                  className="btn mx-2"
                  style={{
                    color: "#fff",
                    backgroundColor: "#B79763",
                    borderColor: "#B79763",
                  }}
                  to={`/userunits/${item._id}`}
                >
                  Ads
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
