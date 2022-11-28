import React, { useState } from 'react';
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

const Write = ({ content = '', editorRef }) => {
  return (
    <div className={styles.editor}>
      <Editor
        initialValue=" "
        placeholder="내용을 입력해 주세요"
        previewStyle={'tab'}
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
        events={['change']}
        // theme="dark"
        ref={editorRef}
      />
      <button>게시하기</button>
    </div>
  );
};

export default Write;
