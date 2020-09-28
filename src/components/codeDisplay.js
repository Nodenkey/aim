// src/components/MyAwesomeCodeSnippet.js
import React, { useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';

import "../styles/code-snippet.css";

const md = new MarkdownIt({
  html: true,
  linkify: false,
});

const Code = ({ markdown }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <span className="code" dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
  );
};

export default Code;
