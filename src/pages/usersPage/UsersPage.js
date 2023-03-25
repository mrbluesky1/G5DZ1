import axios from "axios";
import {useState, useEffect} from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([])
     useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {setUsers(response.data);})
      .catch(error => {console.log(error);});
  }, []);
    return(
        <h1>Username:
        <ul>{users.map(user => (
            <li key={user.id}>{user.username}</li>
        ))}
        </ul>
        </h1>
    )
}