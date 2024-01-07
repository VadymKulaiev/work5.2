import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [users, setUsers] = useState([])

  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const addUser = () => {
    setUsers([...users,  nameRef.current.value,  lastNameRef.current.value, emailRef.current.value ])
  }

  return (
    <div className='App'>
      <input ref={nameRef} type="text" />
      <label>Ім'я</label>
      <br />
      <input ref={lastNameRef} type="text" />
      <label>Прізвище</label>
      <br />
      <input ref={emailRef} type="email" />
      <label>Електронна пошта</label>
      <br />
      <button onClick={addUser}>Submit</button>
      <ul>
        {users.map((user, idx) => <li key={idx}>{user}</li>)}
      </ul>
    </div>
  )
}

export default App;