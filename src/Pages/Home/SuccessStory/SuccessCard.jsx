import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import "@smastrom/react-rating/style.css";

const SuccessCard = ({ review }) => {
  const { image, successStory, name, marriageDate, rating } = review;
  console.log(review.rating);
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
            <div className="flex items-center">
              <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
            </div>
          </div>
        </div>
        <p className="text-[#66451C] font-poppins text-base">{successStory}</p>
        <h5 className="text-gray-500 font-medium">{marriageDate}</h5>
      </div>
    </div>
  );
};

SuccessCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default SuccessCard;
