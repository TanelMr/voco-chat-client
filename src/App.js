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


  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}/${current.getDate()}`;

  const today = new Date(),
       time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  function insertMessage() {
    const newMessage = messages.concat({getUsername, getMessage});
    addMessage(newMessage);
    document.getElementById('UserName').value = '';
    document.getElementById('UserMessage').value = '';

  }

  function textChange(event) {
    setUsername(event.target.value);
    setMessage(event.target.value);
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
        {message.getUsername} * {date} {time}
      </div>

    </div>
      )
    })}
  </div>

  <div className="container inputContainer">

    <div className="row">
      <div className="col-3 border-right border-dark test">
        <textarea placeholder="Username" maxLength="20" id="UserName"
                  onChange={textChange}
        />
      </div>
      <div className="col-9">
        <textarea placeholder="Type your message..." maxLength="200" id="UserMessage"
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
