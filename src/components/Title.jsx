import PropTypes from "prop-types";

export default function Title(props) {
	return <h1>Welcome, {props.user}!</h1>;
}

Title.propTypes = {
	user: PropTypes.string,
};
