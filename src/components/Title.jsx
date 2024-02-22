import PropTypes from "prop-types";

export default function Title({ user }) {
  return <h1>Welcome, {user}!</h1>;
}

Title.propTypes = {
  user: PropTypes.string.isRequired,
};
