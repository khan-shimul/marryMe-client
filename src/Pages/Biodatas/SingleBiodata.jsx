import PropTypes from "prop-types";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegIdBadge } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const SingleBiodata = ({ biodata }) => {
  const {
    profileImage,
    biodataId,
    biodataType,
    occupation,
    parmanentDivision,
    age,
  } = biodata;
  console.log(biodata);
  return (
    <div className="card rounded-md card-side bg-white shadow-lg mb-5 mt-10 flex flex-col md:flex-row">
      <figure className="p-2">
        <img
          className="h-full rounded-md w-full md:w-80 transition-all duration-700 ease-in-out hover:scale-125"
          src={profileImage}
          alt="profile-image"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div>
            <h6 className=" text-gray-500 font-poppins flex items-center gap-x-2">
              <FaRegIdBadge />{" "}
              <span className="text-gray-600 font-medium">#{biodataId}</span>
            </h6>
          </div>
          <div>
            <h4 className="uppercase font-cinzel text-lg font-semibold text-[#eb3468]">
              {biodataType}
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <h3 className="text-xl font-poppins text-[#68471F]">
            Age: <span>{age}</span>
          </h3>
          <h2 className="flex items-center gap-x-2 text-lg text-blue-500 font-poppins font-medium">
            <CgWorkAlt className="text-gray-500" />
            {occupation}
          </h2>
        </div>
        <h4 className="flex items-center gap-x-2 text-[#68471F] text-lg font-poppins">
          <span className="text-xl">
            <IoLocationOutline className="text-gray-600" />
          </span>
          {parmanentDivision}
        </h4>
        <button className="btn btn-outline btn-secondary mt-5 transition-all duration-200 ease-linear">
          View Profile
        </button>
      </div>
    </div>
  );
};

SingleBiodata.propTypes = {
  biodata: PropTypes.object.isRequired,
};

export default SingleBiodata;
