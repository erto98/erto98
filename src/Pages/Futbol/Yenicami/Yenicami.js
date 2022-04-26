import React from 'react'
import ImagesList from "../../../components/imagesList/ImagesList";
import Nav from "../../../components/Nav";
import Upload from "../../../components/upload/Upload";
import { Container } from "@mui/material";
import AuthContext from "../../../context/AuthContext";
import MainNotification from "../../../components/MainNotification";
import Loading from "../../../components/Loading";
import Verification from "../../../components/user/Verification";
import Modal from "../../../components/Modal";

const Yenicami = () => {
  return (
    <div>

      <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
    <AuthContext>
     
      <Upload />
    <ImagesList />
    </AuthContext>
  </Container> 
  </div>
  )
}


export default Yenicami