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
import Yenicami from "./Pages/Futbol/Yenicami/Yenicami";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBDropdownLink } from "mdb-react-ui-kit";

function App() {
  return (
    <>
      <MDBDropdownLink/>
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route path="Yenicami" element={<Yenicami />} />
      <Route exact path="/" element={
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
        <AuthContext>
          <Loading />
          <Modal />
          <Verification />
          <MainNotification />
          <Nav />
          <Upload />
          <ImagesList />
        </AuthContext>
      </Container>} /> 
      </Routes> 
      </BrowserRouter>
      </>

  );
}

export default App;
