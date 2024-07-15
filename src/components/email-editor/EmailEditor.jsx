import { useState, useRef } from "react";
import { Eraser, Bold, Italic, Underline } from "lucide-react";
import parse from "html-react-parser";
import "./email-editor.scss";
import { applyStyle } from "./apply-style";

export function EmailEditor() {
  const [text, setText] = useState(
    "Dolorum in earum repudiandae, voluptates sed hic, fugiat repellat ipsum numquam consectetur temporibus voluptatibus alias iure debitis omnis aliquid praesentium."
  );
  const [cursorStart, setCursorStart] = useState(0)
  const [cursorEnd, setCursorEnd] = useState(0)
  // const [selectedText, setSelectedText] = useState('')


  
  const textRef = useRef(null)  //  teksto redagavimo lauko objektas

  const updateSelection = () => {
    if (!textRef.current.value) return 
    setCursorStart(textRef.current.selectionStart);
    setCursorEnd(textRef.current.selectionEnd);
  }

  const applyFormat = (style) => {
    const selectedText = text.substring(cursorStart, cursorEnd)

    if (!selectedText) return

    let before = text.substring(0, cursorStart)
    let after = text.substring(cursorEnd)
    setText(before + applyStyle(style, selectedText) + after);
    setCursorStart(cursorEnd);
  }

  function send() {
    console.log(textRef.current);
  }

  return (
    // <HotKeys keyMap={keyMap} handlers={handlers}>
      <div>
        <h1>Email Editor</h1>
        <div className="email-editor">
          <p>{parse(text)}</p>
      
          <div className="card">
            <textarea
              className="editor"
              ref={textRef}
              spellCheck="false"
              value={text}
              onChange={(e) => setText(e.target.value)}
              // onClick={updateSelection}
              onSelect={updateSelection}
            />
          </div>
          <div className="actions">
            <div className="tools">
              <button className="btn" onClick={() => setText('')}>
                <Eraser size={18} />
              </button>
              <button className="btn" onClick={() => applyFormat('bold')}>
                <Bold size={18} />
              </button>
              <button className="btn" onClick={() => applyFormat('italic')}>
                <Italic size={18} />
              </button>
              <button className="btn" onClick={() => applyFormat('underline')}>
                <Underline size={18} />
              </button>
            </div>
            <button onClick={send}>Send</button>
          </div>
        </div>
      </div>
    // </HotKeys>
  );
}
