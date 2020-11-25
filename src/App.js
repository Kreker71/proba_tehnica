import React from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Main2 from "./components/Main2"; 
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Main2 />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
