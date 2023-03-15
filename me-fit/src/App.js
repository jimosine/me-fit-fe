
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Library from "./pages/Library"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

function App() {

  const [contributions, setContributions] = useState([]);

  const [goals, setGoals] = useState([]);

  function addGoals(goal) {
    setGoals(goals.concat(goal));
    //setGoals(...goals, goal);
  }

  function addContributions(contribution) {
    setContributions(contributions.concat(contribution));
  }


  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard goals={goals} setGoals={setGoals} addGoals={addGoals} />} />
          <Route path='/dashboard' element={<Dashboard goals={goals} setGoals={setGoals} addGoals={addGoals} />} />
          <Route path='/library' element={<Library updateContributions={addContributions} />} />
          <Route path='/profile' element={<Profile contributions={contributions} />} />
          <Route path='*' element={
            <>
              <h1>There's nothing here 👻</h1>
              <NavLink to="/">Return Home</NavLink>
            </>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;