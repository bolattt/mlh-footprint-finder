import "./App.css";
import Header from "./components/Header";
import MoreInfo from "./components/MoreInfo";
import FormContainer from "./components/FormContainer";
import Footer from "./components/Footer";

import "./bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
      <MoreInfo />
      <Footer />
    </div>
  );
}

export default App;
