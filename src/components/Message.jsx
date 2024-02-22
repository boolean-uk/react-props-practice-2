import PropTypes from "prop-types";

export default function Message({ message }) {
	return (
		<li className={`message ${message.user === "Nicolas" ? "mine" : "other"}`}>
			{message.text}
		</li>
	);
}

Message.propTypes = {
	message: PropTypes.object,
};
