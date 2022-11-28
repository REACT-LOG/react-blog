import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import styles from './Write.module.css';
import store from '../../utils/store';

const debounce = (cb, delay) => {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...rest), delay);
  };
};

const Write = ({ onSubmit }) => {
  const titleRef = useRef();
  const editorRef = useRef();
  const [windowSize, setWindowSize] = useState('vertical');
  const postTemplate = useRef({
    id: new Date().getTime(),
    title: '',
    content: '',
    author: '',
  });

  const handleChange = debounce(({ target }) => {
    const title = titleRef.current.value;
    const content = editorRef.current?.getInstance().getMarkdown();
    postTemplate.current.title = title;
    postTemplate.current.content = content;
    store.setData('current_post', postTemplate.current);
  }, 600);

  const handleResize = () => {
    window.innerWidth > 1000 ? setWindowSize('vertical') : setWindowSize('tab');
  };

  const preventClose = (e) => {
    e.preventDefault();
    // e.returnValue = false;
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('beforeunload', preventClose);
    editorRef.current?.getInstance().reset();

    let textContent;

    try {
      textContent = store.getData('current_post');
    } catch (e) {}
    if (textContent) {
      titleRef.current.value = textContent.title;
      editorRef.current?.getInstance().setMarkdown(textContent.content, true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('beforeunload', preventClose);
      // store.removeStore('current_post');
    };
  }, []);

  return (
    <div className={styles.editor}>
      <h1>제목</h1>
      <input
        type="text"
        className={styles.title}
        placeholder="제목을 입력 해 주세요"
        ref={titleRef}
        name="title"
        onChange={handleChange}
      />
      <hr />
      <Editor
        initialValue={' '}
        placeholder="내용을 입력해 주세요"
        previewStyle={windowSize}
        height="calc(100% - 10rem)"
        initialEditType="markdown"
        useCommandShortcut={true}
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        onChange={handleChange}
        // theme="dark"
        ref={editorRef}
        name="content"
      />
      <div className={styles['btn-container']}>
        <Link
          className={`${styles.link} ${styles.post}`}
          onClick={onSubmit(postTemplate.current)}
          to="/"
        >
          게시하기
        </Link>
      </div>
    </div>
  );
};

export default Write;
