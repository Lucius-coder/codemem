import {Editor} from "@monaco-editor/react";
import React from 'react';

const Editor = () => {
    return (
        <div>
            <Editor height="90vh" width="100%" language="javascript" theme="vs-dark" value="console.log('Hello world!')" />
        </div>
    );
};

export default Editor;