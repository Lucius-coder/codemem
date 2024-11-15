import {Editor} from "@monaco-editor/react";
const CodeEditor = () => {
    return (
            <Editor height="100%" width="100%" language="javascript" theme="vs-dark"
                    value="console.log('Hello world!')" />
        );
};

export default CodeEditor;