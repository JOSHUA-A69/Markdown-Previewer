import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Heading\n## Sub-heading\n[Link](https://example.com)\n\n\`inline code\`\n\n\`\`\`\ncode block\n\`\`\`\n\n- List item\n\n> Blockquote\n\n![Image](https://via.placeholder.com/150)\n\n**Bold text**`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <div className="box" id="editor-container">
        <div className="title-bar">
          <span>Editor</span>
          <div className="close-btn">x</div>
        </div>
        <textarea id="editor" value={markdown} onChange={handleChange} />
      </div>
      <div className="box" id="preview-container">
        <div className="title-bar">
          <span>Previewer</span>
          <div className="close-btn">x</div>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    </div>
  );
}

export default App;
