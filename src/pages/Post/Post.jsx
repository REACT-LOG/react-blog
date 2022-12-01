import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import styles from './Post.module.css';
import Button from '../../components/Button/Button';
import store from '../../utils/store';

const Post = ({ posts, onRemove }) => {
  const { id } = useParams();
  const [isLogin, setIsLogin] = useState(false);
  const loginUser = store.getData('logedInUser');
  const currentPost = posts.find((post) => post.id === Number(id));

  console.log(currentPost.author);

  useEffect(() => {
    if (loginUser && loginUser.id === currentPost.author) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['editor-container']}>
        {posts.map((post) =>
          post.id === Number(id) ? (
            <>
              <h1 className={styles.title}>{post.title}</h1>
              <Viewer
                className={styles.viewer}
                initialValue={post.content}
              />{' '}
            </>
          ) : null,
        )}
      </div>
      {isLogin && (
        <div className={styles['btn-container']}>
          <Button to={`/write/${id}`}>수정하기</Button>
          <Button to={'/'} onClick={onRemove(id)}>
            삭제하기
          </Button>
        </div>
      )}
    </div>
  );
};

export default Post;
