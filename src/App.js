import ImagesList from "./components/imagesList/ImagesList";
import Nav from "./components/Nav";
import Upload from "./components/upload/Upload";
import { Container } from "@mui/material";
import AuthContext from "./context/AuthContext";
import Modal from "./components/Modal";
import MainNotification from "./components/MainNotification";
import Loading from "./components/Loading";
import Verification from "./components/user/Verification";
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
