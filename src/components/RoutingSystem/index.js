import {
  Routes,
  Route
} from "react-router-dom";

import Home from '../Home'
import Login from '../Login'
import Detail from '../Detail'

function RoutingSystem() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutingSystem;
