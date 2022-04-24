// import React from 'react'

// export const Yenicami = () => {
//   return (
//     <div>Yenicami</div>
//   );
// };




import React from "react"
import { useState } from 'react';
import { Form } from "react-bootstrap";

import ProgressList from '../../../components/upload/progressList/ProgressList';

const Yenicami = () => {
  const [files, setFiles] = useState([]);
  return (
    <div>
      <Form  setFiles={setFiles} />
      <ProgressList files={files} />
      yenicami
    </div>
  );
};

export default Yenicami;