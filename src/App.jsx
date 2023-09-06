import { ViewportProvider } from "./context/viewportContext";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <ViewportProvider>
      <Routes />
    </ViewportProvider>
  );
}

export default App;
