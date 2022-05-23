import { ImageList } from '@mui/material';
import React from 'react';
import ProgressItem from './ProgressItem';

const ProgressList = ({ files,takim }) => {
  return (
    <ImageList rowHeight={200} cols={4}>
      {files.map((file, index) => (
        <ProgressItem file={file} key={index} takim={takim} />
      ))}
    </ImageList>
  );
};

export default ProgressList;
