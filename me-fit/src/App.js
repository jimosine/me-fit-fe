
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
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