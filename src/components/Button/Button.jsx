import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="px-8 py-3 text-white bg-gradient-to-r from-[#B57F3E] to-[#d8984a] transition-all hover:scale-110 ease-in-out duration-500">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
