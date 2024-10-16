import { Link } from "react-router-dom";

const House = (props) => {
  const { house } = props;

  return (
    <div className="w-1/4 min-w-64 rounded-3xl bg-violet-100 pb-6">
      <img
        src={house.photo}
        className="h-64 w-full rounded-t-3xl object-cover"
      ></img>
      <Link to={`houseDetail/${house.id}`}>
        <h1 className="ml-3 mt-3 text-lg font-bold text-violet-700">
          {house.name}
        </h1>
      </Link>
      <div className="ml-3 mt-2 flex flex-row items-center gap-3">
        <img className="h-5" src="location-pin.svg"></img>
        <h1 className="text-violet-700">
          {house.city}, {house.state}
        </h1>
      </div>
    </div>
  );
};

export default House;
