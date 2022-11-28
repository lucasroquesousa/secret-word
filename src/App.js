import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <StartScreen />
    </>
  );
}

export default App;
