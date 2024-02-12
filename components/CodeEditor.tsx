"use client"

import * as Y from "yjs"
import LiveblocksProvider from "@liveblocks/yjs"
import { TypedLiveblocksProvider, useRoom } from "@/liveblocks.config"
import {Editor} from "@monaco-editor/react"
import {useState, useCallback, useEffect} from "react"
import { editor } from "monaco-editor"
import { MonacoBinding } from "y-monaco";
import { Awareness } from "y-protocols/awareness"
// import { Cursors } from "@/components/Cursors";
// import { Toolbar } from "@/components/Toolbar";

const CodeEditor = ({ onChange, language, code, theme }) => {
    const [value, setValue] = useState<string>(code || "")
    const room = useRoom()
    const [provider, setProvider] = useState<TypedLiveblocksProvider>();
    const [editorRef, setEditorRef] = useState<editor.IStandaloneCodeEditor>()

    const onEditorChange = (value: any) => {
        setValue(value)
        onChange("code", value)
    }

    // set up Liveblocks yjs provider and attach monaco editor
    useEffect(() => {
        let yProvider: TypedLiveblocksProvider
        let yDoc: Y.Doc
        let binding: MonacoBinding

        if (editorRef) {
            yDoc = new Y.Doc();
            const yText = yDoc.getText("monaco")
            yProvider = new LiveblocksProvider(room, yDoc)
            setProvider(yProvider)

            // attach yjs to monaco
            binding = new MonacoBinding(
                yText,
                editorRef.getModel() as editor.ITextModel,
                new Set([editorRef]),
                yProvider.awareness as Awareness
            )

            return () => {
                yDoc?.destroy();
                yProvider?.destroy();
                binding?.destroy();
            }
        }
    }, [editorRef, room])

    const onEditorMount = useCallback((e: editor.IStandaloneCodeEditor) => {
        setEditorRef(e)
    }, [])

    return (
        <section className="overlay rounded-md overflow-hidden w-full h-full">
            <Editor
                height="85vh"
                width="100%"
                language={language || "javascript"}
                value={value}
                theme={theme}
                defaultValue="// some comment"
                onChange={onEditorChange}
                onMount={onEditorMount}
                options={{ 
                    tabSize: 2,
                    padding: { top: 20 }
                }}
            />
        </section>
    )
}

export default CodeEditor