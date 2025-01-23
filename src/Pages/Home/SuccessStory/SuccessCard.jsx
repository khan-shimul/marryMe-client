import PropTypes from "prop-types";

const SuccessCard = ({ review }) => {
  const { image, successStory } = review;
  return (
    <div className="card border bg-[#FEFCF7] relative">
      <div className="card-body">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={image} />
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
