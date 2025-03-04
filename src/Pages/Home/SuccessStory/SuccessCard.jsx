import PropTypes from "prop-types";

const SuccessCard = ({ review }) => {
  const { image, successStory, name, marriageDate } = review;
  return (
    <div className="card border bg-[#FEFCF7] relative">
      <div className="card-body">
        <div className="flex items-center gap-x-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={image} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#66451C] font-cinzel">
              {name}
            </h3>
            <h5 className="text-gray-500 font-medium">{marriageDate}</h5>
          </div>
        </div>
        <div>{/* Name & Rating */}</div>
        <p className="text-[#66451C]">{successStory}</p>
      </div>
    </div>
  );
};

SuccessCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default SuccessCard;
