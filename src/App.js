import React from "react";
import Parent from "./components/Parent";
import Footer from "./components/Footer";

class App extends React.Component{
  render(){
    return (
      <>
      <h1>for Adoption</h1>
      <Parent/>
      <Footer/>
      </>
    )
  }
}

export default App;