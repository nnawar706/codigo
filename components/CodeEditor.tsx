"use client"

import {Editor} from "@monaco-editor/react";
import {useState} from "react";

const CodeEditor = ({ onChange, language, code, theme }) => {
    const [value, setValue] = useState<string>(code || "")

    const onEditorChange = (value: any) => {
        setValue(value)
        onChange("code", value)
    }

    return (
        <section>
            <Editor
                height="85vh"
                width="100%"
                language={language || "javascript"}
                value={value}
                theme={theme}
                defaultValue="// some comment"
                onChange={onEditorChange}
            />
        </section>
    )
}

export default CodeEditor