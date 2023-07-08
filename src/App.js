import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadData></LoadData>
    </div>
  );
}
function LoadData() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h1>Load Data</h1>
      <h2>{comments.length}</h2>
      {
        comments.map(comment => <Comment name={comment.email} id={comment.id} body={comment.body}></Comment>)
      }
    </div >
  )
}
function Comment(props) {
  return (
    <div>
      <h2>Email:{props.name}</h2>
      <h3>Id: {props.id}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
