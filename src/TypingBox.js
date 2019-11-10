import React, { useState } from 'react';
import * as Draft from "draft-js";
import logo from './logo.svg';
import './App.css';
import { createWithHTML, createWithPlainText } from './utilities/draft'
import { textSamples } from './utilities/textSamples'
import Timer from './Timer'

const sample = textSamples.easy[0];

export default function TypingBox() {

  const [editorState, setEditorState] = useState(createWithPlainText(sample));
  const [timeChoice, setTimeChoice] = useState(30);
  const [testHasStarted, setTestHasStarted] = useState(false);

  const editorStateChanged = (newEditorState: Draft.EditorState) => {
      setEditorState(newEditorState);
  };

  const startTest = () => {
    setTestHasStarted(true);
    console.log('startedTest')
  }

  const finishTest = () => {
    console.log('finishTest')
  }

  const updateTime = () => {
    console.log('updateTime')
  }

  return (
    <div className="typing-box">
      <Draft.Editor
              editorState={editorState}
              onChange={editorStateChanged}
            />

      <button type="button" onClick={startTest} >Start </button>

      <Timer className="small-display"
              signal={testHasStarted}
              timeChoice={timeChoice}
              updateTime={updateTime}
              finishTest={finishTest}
            />
    </div>
  );
}
