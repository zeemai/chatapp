import React from 'react';

import './Input.css';
import sendIcon from '../../icons/sendIcon.png';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Enter a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>
      <img className="sendIcon" src={sendIcon} alt="Send Icon" />
    </button>
  </form>
)

export default Input;