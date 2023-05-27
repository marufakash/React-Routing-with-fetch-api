import React, { useEffect, useState } from 'react';
import style from './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Blog from './Components/Blog';

// fetching url
const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUsers = () => {
    fetch(URL)
    .then((res) => {
      if(!res.ok) {
        throw Error('fetching is not successful.')
      } else {
        return res.json();
      }
    })
    .then((data) => {
      setUsers(data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getAllUsers();
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      {error && <h3>{error.message}</h3>}
      {isLoading && <h3>Data is Loading...</h3>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {users && <Route path='/blogs' element={<Blogs users={users} />} />}
        <Route path='/blogs/:username' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
