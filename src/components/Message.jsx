import PropTypes from 'prop-types'

function Message({ message }) {
  return (
    <li className={`message ${message.user === 'Nicolas' ? 'mine' : 'other'}`}>
      {message.text}
    </li>
  )
}

Message.propTypes =
{
  message: PropTypes.array
}

export default Message
