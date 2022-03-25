
import './App.css';

function App() {


  return (
<div>
  <h2>KHK</h2>
  <div className="container textBoxContainer">
    <div className="messageBox">
      <div className="messageText">
        Lorem ipsum lorem ip
      </div>
      <div className="userNameAndDate">
        John Doe * 20.02.2021
      </div>
    </div>
  </div>

  <div className="container-fluid inputContainer">
    <div className="row">
      <div className="col-3 ">
        <textarea placeholder="Username" maxLength="20"/>
      </div>
      <div className="col-9">
        <textarea placeholder="Type your message..." maxLength="200"/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button type="button" id="button" className="button btn btn-dark">Send</button>
      </div>
    </div>
  </div>


</div>
  );
}

export default App;
