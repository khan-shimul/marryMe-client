import PropTypes from "prop-types";

const PremiumMemberCard = ({ premiumUser }) => {
  console.log(premiumUser);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[250px] w-full"
          src={premiumUser.profileImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

PremiumMemberCard.propTypes = {
  premiumUser: PropTypes.object.isRequired,
};

export default PremiumMemberCard;
