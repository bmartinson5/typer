import React, { useState } from 'react';
import * as Draft from "draft-js";
import logo from './logo.svg';
import './App.css';

function createWithPlainText(plainText) {
    const contentState = Draft.ContentState.createFromText(plainText);
    const newEditorState = Draft.EditorState.createWithContent(contentState);
    return newEditorState;
}

function createWithHTML(initialHtml) {
     const contentBlocks = Draft.convertFromHTML("<div>hello</div>");
     const contentState = Draft.ContentState.createFromBlockArray(contentBlocks);
     const newEditorState = Draft.EditorState.createWithContent(contentState);
     return newEditorState;
}

export default function TypingBox() {

  const [editorState, setEditorState] = useState(createWithPlainText("hello"));

  const editorStateChanged = (newEditorState: Draft.EditorState) => {
      setEditorState(newEditorState);

  };

  return (
    <div className="typing-box">
      <Draft.Editor
              editorState={editorState}
              onChange={editorStateChanged}
            />
    </div>
  );
}
