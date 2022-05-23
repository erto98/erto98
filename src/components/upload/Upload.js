import { useState } from 'react';
import Form from './Form';
import ProgressList from './progressList/ProgressList';

const Upload = ({ takim }) => {
  const [files, setFiles] = useState([]);
  return (
    <div>
      <Form setFiles={setFiles} />
      <ProgressList files={files} takim={takim}  />
    </div>
  );
};

export default Upload;
