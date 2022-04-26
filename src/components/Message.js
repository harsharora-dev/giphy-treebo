import PropTypes from "prop-types";
import styled from "styled-components";

const MessageText = styled.p`
  width: 100%;
  text-align: center;
  margin: 10px 0;
`;

const Message = ({ message }) => <MessageText>{message}</MessageText>

Message.propTypes = {
  message: PropTypes.string.isRequired
}

Message.defaultProps = {
  message: "Thats all folks!"
}

export default Message;