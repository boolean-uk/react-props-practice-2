import PropTypes from "prop-types";
function Title({ user }) {
  return <h1>Welcome, {user}!</h1>;
}

export default Title;
Title.propTypes = { user: PropTypes.string };
