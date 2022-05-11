import React, { StrictMode } from 'react';
// const ReactDOM = require('react-dom');
import {createRoot} from 'react-dom/client';
import WordRelay from './WordRelay'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <WordRelay/>
  </StrictMode>
)
// ReactDOM.render(<WordRelay/>, document.getElementById("#root"));