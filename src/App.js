import './App.css';
import {useState} from 'react';

function App() {

  const [text,setText] = useState("");

  const[lines,setlines] = useState(["msg1","msg2","msg3"]);

  const onTextChange = (event) => {setText(event.target.value);};

  const Onsend = (event) => {
    setlines(lines => [...lines, text]);
    setText("")
  }

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => {
            return<div className="App-chatroom-text">
          {x}
          </div>
        })
      }
       
        <div className="App-chatroom-text">
          Line1
          {text}
        </div>
        <div className="App-chatroom-text">
          Line2
        </div>
        <div className="App-chatroom-text">
          Line3
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"value={text} onChange={onTextChange}/>
        <div className="App-textbox-send"onClick={Onsend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
