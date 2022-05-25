import Navbar from "./navbar/navbar";
import Takim from "./Pages/Takim";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBDropdownLink } from "mdb-react-ui-kit";

function App() {
  return (
    <>
      <MDBDropdownLink/>
      <Navbar /> 
      <BrowserRouter>
      <Routes>
      <Route path="/:takim" element={<Takim />} />
      </Routes> 
      </BrowserRouter>
      </>
  );
}

export default App;
