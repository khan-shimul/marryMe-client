import PropTypes from "prop-types";

const ButtonPink = ({ text }) => {
  return (
    <button className="px-8 py-3 text-white bg-gradient-to-r from-[#D00A92] to-[#E14D61] transition-all hover:scale-110 ease-in-out duration-500">
      {text}
    </button>
  );
};

ButtonPink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonPink;
