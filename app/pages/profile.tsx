
import { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import Home from '../pages/home'
import Profile from '../pages/profile'

function App() {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if the current user exists on the initial render.
  useEffect(() => {
    if (currentUser) {
      navigate('/profile')
    }
  }, [currentUser])
  
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="profile" element={currentUser ? <Profile />: <Home />} />
    </Routes>
  )
}

export default App
