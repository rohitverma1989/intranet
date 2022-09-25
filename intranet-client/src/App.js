import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // this is basically getter and setter of state variable 
  const [user, setUser] = useState(null);
  // life cycle hook - it will run the life cycle of component
  useEffect(() => {
    // below axios code is ajax(asyncronous javascript and xml) call 
    axios.get('http://localhost:3001/getadmin').then((res) => {
      console.log(res.data);
      //i am setting user state here 
      setUser((state) => res.data);
    });
  }, []);

  return (
    <div>
      <div className='row bg-primary'>
        <div className='col'>
          Name
        </div>
        <div className='col'>
          Age
        </div>
        <div className='col'>
          Role
        </div>
      </div>
      <div className='row bg-warning'>
        <div className='col'>
          {user.name}
        </div>
        <div className='col'>
          {user.age}c
        </div>
        <div className='col'>
          {user.role}
        </div>
      </div>
    </div>
  );
}

export default App;
