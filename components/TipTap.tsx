"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import useSpeechToText from "react-hook-speech-to-text";
import   parse  from 'html-react-parser'
import "./styles.css";
import {
  FaBold, 
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menuBar">
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is_active" : ""}
        >
          <FaBold className="text-sm" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is_active" : ""}
        >
          <FaItalic className="text-sm" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is_active" : ""}
        >
          <FaUnderline className="text-sm" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is_active" : ""}
        >
          <FaStrikethrough className="text-sm" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is_active" : ""
          }
        >
          <FaHeading className="text-sm" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is_active" : ""
          }
        >
          <FaHeading className="heading3 text-sm" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is_active" : ""}
        >
          <FaListUl className="text-sm" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is_active" : ""}
        >
          <FaListOl className="text-sm" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is_active" : ""}
        >
          <FaQuoteLeft className="text-sm" />
        </button>
      </div>
      <div>
        <button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo className="text-sm" />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export const Tiptap = ({}) => {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState<boolean>(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

 
  const count = useRef(0);

  // if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  
  const editor = useEditor({
    extensions: [StarterKit, Underline, TextStyle, Color],
    content: ``,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();

      console.log(html);
    },
  });
  useEffect(() => {
    if (interimResult) {
      const dat = interimResult;
      const da:any= count
      const d = parse(da.current.innerHTML)
      // console.log(da.toString());
      console.log(d);
      // editor.chain().focus('end').createParagraphNear().insertContent('some content').run()
      //  editor.chain().focus('end').createParagraphNear().insertContent(result.transcript).run()
    }
  }, [interimResult,flag]);

  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button
        className="p-2 bg-gray-500"
        onClick={isRecording ? stopSpeechToText : startSpeechToText}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
        className="space-x-4 px-2"
      >
        toggle
      </button>

      <div className="textEditor">
        <MenuBar editor={editor} />
        <EditorContent
          className="dark:bg-black dark:text-black"
          editor={editor}
        />
        <div>
          <h2>Results</h2>
          <h1>{}</h1>
          <ul ref={count}>
            {results.map((result) => (
              <li key={result.timestamp}>{result.transcript}</li>
              // editor?.setOptions({ content: result.transcript })
              // <li key={result.timestamp}>{result.transcript}</li> 
              
            
            ))}
            {interimResult && <li>{interimResult}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};
