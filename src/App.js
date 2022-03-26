import './App.css';
import { useState } from "react";

const DUMMY_DATA = [
  {
    getUse: 'John Smith',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
  }
]


function App() {

  const [messages, addMessage] = useState ('DUMMY_DATA')
  const [getUsername, setUsername] = useState('');
  const [getMessage, setMessage] = useState('');


  function insertMessage() {
    const newMessage = messages.concat({getUsername, getMessage});
    addMessage(newMessage);

    /*
        document.getElementById('message').value = '';
    */
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

      <div className="messageText">
        {message.getMessage}
      </div>

      <div className="userNameAndDate">
        {message.getUsername}
      </div>

    </div>
      )
    })}
  </div>

  <div className="container-fluid inputContainer">

    <div className="row">
      <div className="col-3 ">
        <textarea placeholder="Username" maxLength="20" id="Username"
                  onChange={textChange}
        />
      </div>
      <div className="col-9">
        {/*test*/}
        <textarea placeholder="Type your message..." maxLength="200" id={"Usermessage"}
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
