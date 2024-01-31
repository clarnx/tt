import React from 'react'
import {v4 as uuidv4} from "uuid"

function Form( {input, setInput, todos, setToDos} ) {
    const onInputChange = (event) => {
        setInput(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();
        setToDos([...todos, {id:uuidv4(), title:input, completed: false}]);
        setInput("");
        console.log(setToDos.id + "----")
        // id doesnt work
        console.log("+++++++")
    }
    return (
        <form onSubmit={onFormSubmit}> 
            <input type='text' placeholder='Enter a chore...'className='task-input' value={input} required onChange={onInputChange}/>
            <button className='button-add' type='submit'> Add </button>
        </form>
    )
}

export default Form