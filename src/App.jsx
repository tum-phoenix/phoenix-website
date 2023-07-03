import { ViewportProvider } from 'react-viewport-utils';
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
