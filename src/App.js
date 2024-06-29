import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Family Feud";
  }, []);

  return (
    <Main/>
  );
}
export default App;
