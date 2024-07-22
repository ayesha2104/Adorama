// import React from "react";
// import ReactDOM from "react-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import { BrowserRouter as Router } from 'react-router-dom';

// import App from "./App";

// ReactDOM.render(
//   <ChakraProvider>
//     <Router>
//     <App />
//     </Router>
//   </ChakraProvider>,
//   document.getElementById("root")
// );
import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <Router>  
      <App />
    </Router>
    
  </ChakraProvider>
);
