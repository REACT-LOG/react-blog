import React from 'react';
import { useParams } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const Post = () => {
  const { id } = useParams();

  return (
    <>
      <Viewer initialValue={'## 하이요'} />
    </>
  );
};

export default Post;
