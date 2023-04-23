// import "./App.css";
import Header from "./components/Header";
import MoreInfo from "./components/MoreInfo";
import FormContainer from "./components/FormContainer";
import Footer from "./components/Footer";

import "./bootswatch/dist/quartz/bootstrap.min.css"; // Added this :boom:

function App() {
  return (
    <div>
      <Header />
      <FormContainer />
      <MoreInfo />
      <Footer />
    </div>
  );
}

export default App;
