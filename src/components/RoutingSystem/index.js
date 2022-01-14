import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Detail from '../Detail'
import { useSelector } from 'react-redux'

const requireLogIn = (component, loggedIn) => {
  let Component = component
  return loggedIn ?
    <Component /> :
    <Navigate to="/login" />
}

const requireLogout = (component, loggedIn) => {
  let Component = component
  return loggedIn ?
    <Navigate to="/" /> :
    <Component />
}

function RoutingSystem() {
  let loggedIn = useSelector(state => state.user.loggedIn)
  return (
    <Routes>
      <Route path="/login" element={requireLogout(Login, loggedIn)} />
      <Route path="/detail/:id" element={requireLogIn(Detail, loggedIn)} />
      <Route path="/" element={requireLogIn(Home, loggedIn)} />
    </Routes>
  );
}

export default RoutingSystem;
