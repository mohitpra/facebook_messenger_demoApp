import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) =>({id:doc.id, message: doc.data()})));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="app">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png" />

      <h1>Messenger App</h1>
      <h2>Welcome {username} </h2>
      <div className="container">
      <form className="app__form">
        <FormControl className="app__formControl">
          
          <Input className="app__input" placeholder="Enter a message" value={input} onChange={(e) => setInput(e.target.value)} />
         
         <IconButton
         disabled={!input}
         variant="contained"
         color="primary"
         type="submit"
         onClick={sendMessage}>
           <SendIcon />
         </IconButton>
        </FormControl>
      </form>
      </div>
     

      <FlipMove>
      {messages.map(({id, message}) => (
        <Message key={id} username={username} message={message} />
      ))}
      </FlipMove>

      
    </div>
  );
}

export default App;
