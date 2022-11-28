import React, { useState, useEffect } from 'react';
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

const debounce = (cb, delay) => {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...rest), delay);
  };
};

const Write = ({ content, editorRef, onSubmit }) => {
  const [write, setWrite] = useState('');
  const [windowSize, setWindowSize] = useState(0);

  const handleChange = debounce(() => {
    const data = editorRef.current?.getInstance().getHTML();
    setWrite(data);
  }, 600);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <div className={styles.editor}>
      <h1>제목</h1>
      <input
        type="text"
        className={styles.title}
        placeHolder="제목을 입력 해 주세요"
      />
      <hr />
      <Editor
        initialValue={' '}
        placeholder="내용을 입력해 주세요"
        previewStyle={windowSize > 1000 ? 'vertical' : 'tab'}
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
      />
      <div className={styles['btn-container']}>
        <button className={styles.post} onClick={onSubmit}>
          게시하기
        </button>
      </div>
    </div>
  );
};

export default Write;
