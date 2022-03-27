import './App.css';
import { useState } from "react";

const initialData = [
  {
    getUsername: 'Your username',
    getMessage: 'Text you have written'
  }
]

function App() {

  const [messages, addMessage] = useState (initialData);
  const [getUsername, setUsername] = useState('');
  const [getMessage, setMessage] = useState('');


  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;



  function insertMessage() {
    const newMessage = messages.concat({getUsername, getMessage});
    addMessage(newMessage);
    document.getElementById('UserName').value = '';
    document.getElementById('UserMessage').value = '';

  }

  function textChange(event) {
    setMessage(event.target.value);
  }
  function userChange(event) {
    setUsername(event.target.value);
  }

  return (
<div>
  <h2>KHK</h2>
  <div className="container textBoxContainer">

    {messages.map((message) => {
      return (
    <div className="messageBox">

      <div className="userMessageText">
        {message.getMessage}
      </div>

      <div className="userNameAndDate">
        {message.getUsername} * {date} {hours}:{minutes}:{seconds}
      </div>

    </div>
      )
    })}
  </div>

  <div className="container inputContainer">

    <div className="row">
      <div className="col-3 border-right border-dark test">
        <textarea placeholder="Username" maxLength="20" id="UserName"
                  onChange={userChange}
        />
      </div>
      <div className="col-9">
        <textarea placeholder="Type your message..." maxLength="100" id="UserMessage"
                  onChange={textChange}
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <button type="button" id="button" className="button btn btn-dark" onClick={insertMessage}>Send</button>
      </div>
    </div>
  </div>


</div>
  );
}

export default App;
