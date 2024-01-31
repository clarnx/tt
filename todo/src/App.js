import Header from './components/Header';
import Form from './components/Form';
import './App.css';
import React, {useState} from 'react';
import List from './components/List';



function App() {
  const [input, setInput] = useState("");
  const [todos, setToDos] = useState([]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header/>
        <Form 
          input={input}
          setInput={setInput}
          todos = {todos}
          setToDos= {setToDos}/>
          <List 
            todos = {todos}
            setToDos= {setToDos}/>
      </div>
      
    </div>
  );
}

export default App;
