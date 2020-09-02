import React , {useState, useEffect} from 'react';
import Message from './components/Message';
import firebase from 'firebase';
import db from './firebase';
import { Input, FormControl } from '@material-ui/core';
import  FlipMove  from 'react-flip-move';
import './App.css';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setinput] = useState('');
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState('');

  useEffect(()=>{  // will tirggered when app component loads //
    db.collection('messages').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      setmessages(snapshot.docs.map(doc => ({id:doc.id , message: doc.data()})
      ))})
  }, [])

  useEffect(() => {
    setusername(prompt('Type Your Name?'));
  }, [])

  const handle = (e) =>{
    e.preventDefault();
    db.collection('messages').add({
      username , 
      text: input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });
    setinput('')
  }
  return (
    <div className='App'>
      <h2 className="heading">Sasta Messenger</h2>
      <p>Recent Message comes at the top</p>
      <form className="form">
        <FormControl className="formControl">
        <Input className='input' placeholder='Enter a message...' value={input} onChange={e => setinput(e.target.value)} />
        <IconButton className='send' disabled={!input} onClick={handle}type='submit'>Send<SendIcon /></IconButton>
        </FormControl>
      </form>
      <FlipMove>
      {messages.map(({id , message}) =>{
        return <Message key = {id} message={message} username={username}/>
      })}
      </FlipMove>
    </div>
  )
}

export default App;
