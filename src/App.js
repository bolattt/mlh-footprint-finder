import "./App.css";
import Header from "./components/Header";
import MoreInfo from "./components/MoreInfo";
import FormContainer from "./components/FormContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
      <MoreInfo />
    </div>
  );
}

export default App;
