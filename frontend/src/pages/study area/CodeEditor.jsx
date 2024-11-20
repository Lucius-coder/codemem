import {Editor} from "@monaco-editor/react";
import PropTypes from "prop-types";

// `CodeEditor` component definition
const CodeEditor = ({theme="vs-dark",value="// type your code here"}) => {
    return (
        // Rendering the `Editor` component from `@monaco-editor/react` library

        <Editor
            height="100%" // Sets the height of the editor to 100%
            width="100%"  // Sets the width of the editor to 100%
            language="javascript" // Sets the language mode of the editor to JavaScript
            theme={theme} // Sets the theme of the editor to Visual Studio Dark
            value={value}// Initial value of the editor
        />
    );
};

CodeEditor.propTypes = {
    theme: PropTypes.string,
    value: PropTypes.string
}

export default CodeEditor;