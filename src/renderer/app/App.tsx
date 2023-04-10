import {MemoryRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "../layout/layout.jsx";
import Proppy from "../pages/proppy/Proppy.jsx";
import P2P from "../pages/P2P/P2P.jsx";
import Area from "../pages/Area/Area.jsx";
import Beacon from "../pages/beacon/beacon.jsx";
import Radcom from "../pages/radcom/radcom.jsx";
import Planner from "../pages/planner/planner.jsx";
import Spaceweather from "../pages/spaceweather/spaceweather.jsx";
import Swl from "../pages/swl/swl.jsx";
import Manual from "../pages/help/manual/manual.jsx";
import SsnData from "../pages/help/ssnData/ssnData.jsx";
import Privacy from "../pages/help/privacy/privacy.jsx";
import About from "../pages/help/about/about.jsx";

function App() {
  return(
    <MemoryRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/"  element={<Navigate to='/proppy' />}/>
          <Route path="/proppy" element={<Proppy />} />
          <Route path="/proppy/p2p" element={<P2P />} />
          <Route path="/proppy/area" element={<Area />} />
          <Route path="/proppy/beacon" element={<Beacon />} />
          <Route path="/proppy/radcom" element={<Radcom />} />
          <Route path="/proppy/planner" element={<Planner />} />
          <Route path="/proppy/spaceweather" element={<Spaceweather />} />
          <Route path="/proppy/swl" element={<Swl />} />
          <Route path="/proppy/help/manual" element={<Manual />} />
          <Route path="/proppy/help/ssn-data" element={<SsnData />} />
          <Route path="/proppy/help/about" element={<About />} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

export default App
