import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { LiaSdCardSolid } from "react-icons/lia";
import { Link } from "react-router";

const PremiumMemberCard = ({ premiumUser }) => {
  const {
    biodataId,
    name,
    biodataType,
    profileImage,
    parmanentDivision,
    age,
    occupation,
  } = premiumUser;
  return (
    <div className="card bg-[#FFFCF1] shadow-xl rounded-md">
      <figure className="overflow-hidden">
        <img
          className="h-[250px] w-full transition-transform  ease-in-out duration-500 hover:scale-110"
          src={profileImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body font-poppins">
        <div className="flex items-center justify-between">
          <div title="Bio-data Id" className="flex items-center gap-x-1">
            <LiaSdCardSolid className="text-2xl text-gray-500" />
            <h5 className="text-sm font-medium text-gray-600">#{biodataId}</h5>
          </div>
          <div title="Bio-data Id" className="flex items-center gap-x-1">
            <IoLocationOutline className="text-xl text-gray-500" />
            <h5 className="text-sm font-medium text-gray-600">
              {parmanentDivision}
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-[#212529] font-playfair">
            {name}
          </h2>
          <h5
            className={`capitalize text-base font-medium ${
              biodataType === "female" ? "text-pink-600" : "text-violet-600"
            }`}
          >
            {biodataType}
          </h5>
        </div>
        <div className="flex items-center justify-between my-3">
          <h5 className="text-blue-700 text-base">
            <span className="text-sm text-gray-500">Age:</span> {age}
          </h5>
          <h5 className="text-red-500 text-base">
            <span className="text-sm text-gray-500">Occupation:</span>{" "}
            {occupation}
          </h5>
        </div>
        <Link to={`user-details/${biodataId}`}>
          <button className="px-8 py-3 w-full text-white bg-gradient-to-r from-[#0e6ac0] to-[#9258fc] transition-all hover:scale-110 ease-in-out duration-500">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

PremiumMemberCard.propTypes = {
  premiumUser: PropTypes.object.isRequired,
};

export default PremiumMemberCard;
