import './App.css';
import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import HomePage from './HomePage';
import About from './About';
import Blog from './Blog/Blog';
import CreateAccount from './Profile/Account';
import ContactPage from './Contact/ContactPage';

function App() {
  const [user, setUser] = useState(null)


  useEffect(() => {
    fetch("/me")
    .then(resp => resp.json())
    .then(data => setUser(data))
  }, [])


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Harrison Wilson</h1>
          <NavBar user={user}/>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/account" element={<CreateAccount user={user} setUser={setUser} />}></Route>
            <Route exact path="/contact" element={<ContactPage user={user} />}></Route>
          </Routes>
        </header>
      </div>
    </>
  );
}

export default App;
