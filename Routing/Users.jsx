import {Link, useParams} from 'react-router-dom';
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

 const Users = () => {
     const {id} = useParams(); 
     return(
         <>  
             <h1>Users</h1>
             <strong>Select a user:</strong>
             <ul>
                 <li>
                     <Link to="/users/1">User 1</Link>
                 </li>
                 <li>
                     <Link to="/users/2">User 2</Link>
                 </li>
                 <li>
                     <Link to="/users/3">User 3</Link>
                 </li>
             </ul>
             <p>{id}</p>
             <Routes>
          <Route path="/Users/*" element={<Users/>} />
          <Route path="/Users/:id/*" element={<Users/>} />
        </Routes>
         </>
     );
 }
 export default Users; 