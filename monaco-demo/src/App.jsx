import React, { useRef } from "react";

import Editor from "@monaco-editor/react";

function App() {
  const [contentMarkdown, setContentMarkdown] = React.useState("");

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleSafe() {
    console.log(editorRef.current.getValue());
  }
 


  return (
    <>
      <button onClick={handleSafe}>Guardar</button>
      <Editor
        height="100%"
        width="100%"
        theme="vs-dark" 
        defaultLanguage="java"
        defaultValue="public class Example {
        public static void main(String[] args) { 

            System.out.println('Hello, world!'); 
          } 
        }"   
        
        onMount={handleEditorDidMount}
      />
    </>
  );
}

export default App;