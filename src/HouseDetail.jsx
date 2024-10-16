import { useParams } from "react-router-dom";

const HouseDetail = () => {
  const { houseId } = useParams();

  return <h1 className="ml-10 mt-3">Here is house {houseId} detail </h1>;
};

export default HouseDetail;
