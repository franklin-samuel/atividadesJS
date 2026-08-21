import {useEffect, useState} from 'react'
import './App.css'
import User from "./components/User.jsx";

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => setUsers(data.users))
  },[]);

  return (
      <>
        <section id="center">
          {users.map(user => (
              <User
                  key={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  image={user.image}
                  address={user.address}
                  email={user.email}
                  phone={user.phone}
                  company={user.company}
                  age={user.age}
              />
          ))}
        </section>

        <section id="spacer"></section>
      </>
  )

}

export default App
