import React from "react";

// Components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

// Pages
import HomePage from "pages/Home";

import "assets/scss/style.scss";

const App = ({ children }) => (
  <>
    <Navbar />
    <HomePage />
    <Footer />
  </>
);

export default App;
