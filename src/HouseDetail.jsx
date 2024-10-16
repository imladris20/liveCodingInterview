import { useParams } from "react-router-dom";

const HouseDetail = () => {
  const { houseId } = useParams();

  return <h1>here is house {houseId} detail </h1>;
};

export default HouseDetail;
