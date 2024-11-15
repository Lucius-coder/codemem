import {Editor} from "@monaco-editor/react";

// `CodeEditor` component definition
const CodeEditor = () => {
    return (
        // Rendering the `Editor` component from `@monaco-editor/react` library
        <Editor
            height="100%" // Sets the height of the editor to 100%
            width="100%"  // Sets the width of the editor to 100%
            language="javascript" // Sets the language mode of the editor to JavaScript
            theme="vs-light" // Sets the theme of the editor to Visual Studio Dark
            value="console.log('Hello world!')" // Initial value of the editor
        />
    );
};



export default CodeEditor;