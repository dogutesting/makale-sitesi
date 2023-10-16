import { useEffect, useState } from 'react';

export default function Test() {
  /* const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('API hatası:', error));
  }, []); */


  return (
    <div style={{backgroundColor: "black", height:"100rem", color: "white"}}>
      <h1>Kullanıcılar</h1>
      {/* <ul style={{color: "red"}}>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul> */}
      
    </div>
  );
}