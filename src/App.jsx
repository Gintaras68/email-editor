import { useState } from "react"; //  React biblioteka
import "./App.scss";
import { EmailEditor } from "./components/email-editor/EmailEditor";
import { EmailList } from "./components/email-list/EmailList";

export function App() {
  // const [count, setCount] = useState(0)
  const [title, setTitle] = useState("tuscia");

  return (
    <section className="main-container">
      <EmailEditor />
      <EmailList />
    </section>
  );
}
