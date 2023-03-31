
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Library from "./pages/Library"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { storageSave } from './utils/storage';
import KeycloakRoute from "./routes/KeycloakRoute";


function App() {


  const [contributions, setContributions] = useState([]);

  const [goals, setGoals] = useState([]);

  const [profile, setProfile] = useState({})

  function addGoals(goal) {
    setGoals(goals.concat(goal));
    storageSave('goals', goals.concat(goal))
  }

  function addContributions(contribution) {
    setContributions(contributions.concat(contribution));
  }

  function removeContribution(name) {
    setContributions(contributions.filter(item => item.name !== name))
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<KeycloakRoute>
            <Dashboard goals={goals} setGoals={setGoals} addGoals={addGoals} setProfile={setProfile} />
          </KeycloakRoute>
          } />
          <Route path='/dashboard' element={<KeycloakRoute><Dashboard goals={goals} setProfile={setProfile} setGoals={setGoals} addGoals={addGoals} /></KeycloakRoute>} />
          <Route path='/library' element={<KeycloakRoute><Library updateContributions={addContributions} setContributions={setContributions} contributions={contributions} /></KeycloakRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<KeycloakRoute><Profile setContributions={setContributions} contributions={contributions} profile={profile} setProfile={setProfile} /></KeycloakRoute>} />
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
