import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from '../Home'
import Login from '../Login'
import Detail from '../Detail'
import { useSelector } from 'react-redux'

const requireLogin = (component, loggedIn) => {
  const LoggedInComponent = component
  return loggedIn ?
    <LoggedInComponent /> :
    <Navigate to="/login" />
}


function RoutingSystem() {
  let loggedIn = useSelector(state => state.user.loggedIn)
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={requireLogin(Detail, loggedIn)} />
      <Route path="/" element={requireLogin(Home, loggedIn)} />
    </Routes>
  );
}

export default RoutingSystem;
