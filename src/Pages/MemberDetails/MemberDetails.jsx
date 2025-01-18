import { useParams } from "react-router";

const MemberDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Details For: {id}</h2>
    </div>
  );
};

export default MemberDetails;
