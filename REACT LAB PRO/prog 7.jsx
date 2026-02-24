import { useState, useEffect } from "react"; 
function App() { 
const [users, setUsers] = useState([]); 
useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((res) => res.json()) 
      .then((data) => setUsers(data)); 
  }, []); 
 
  return ( 
    <> 
      <style>{` 
        body { 
          background: #e3ecf7; 
          font-family: Arial, sans-serif; 
        } 
 
        .container { 
          text-align: center; 
          margin-top : 30px; 
        } 
 
        .title { 
          font-size: 26px; 
          margin-bottom : 20px; 
          color: #1f2d3d; 
        } 
 
        .user-list { 
          width : 350px; 
          margin: auto; 
        } 
 
        .user { 
          padding: 12px 16px; 
          margin-bottom : 12px; 
          background: #d6e4f5; 
          border-radius: 10px; 
          text-align : left; 
          border-left : 4px solid #4a90e2; 
          transition: 0.3s; 
        } 
 
        .user:hover { 
          background: #c7daf1; 
        } 
 
        .user p { 
          font-size: 14px; 
          margin: 4px 0; 
        } 
 
        strong { 
          color: #1f2d3d; 
        } 
      `}</style> 
 
      <div className="container"> 
        <h1 className="title">User List</h1> 
 
        <div className="user-list"> 
          {users.map((user) => ( 
            <div key={user.id} className="user"> 
              <p><strong>Name:</strong> {user.name}</p> 
              <p><strong>Email:</strong> {user.email}</p> 
            </div> 
          ))} 
        </div> 
      </div> 
    </> 
  ); 
} 
 
export default App;
