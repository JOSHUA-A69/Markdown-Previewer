import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Heading\n## Sub-heading\n[Link](https://example.com)\n\n\`inline code\`\n\n\`\`\`\ncode block\n\`\`\`\n\n- List item\n\n> Blockquote\n\n![Image](https://via.placeholder.com/150)\n\n**Bold text**`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
}

export default App;
