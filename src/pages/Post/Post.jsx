import React from 'react';
import { useParams } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import styles from './Post.module.css';
import Button from '../../components/Button/Button';

const Post = ({ posts, onRemove }) => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles['editor-container']}>
        {posts.map((e) =>
          e.id === Number(id) ? (
            <>
              <h1 className={styles.title}>{e.title}</h1>
              <Viewer className={styles.viewer} initialValue={e.content} />{' '}
            </>
          ) : null,
        )}
      </div>
      <div className={styles['btn-container']}>
        <Button to={`/write/${id}`}>수정하기</Button>
        <Button to={'/'} onClick={onRemove(id)}>
          삭제하기
        </Button>
      </div>
    </div>
  );
};

export default Post;
