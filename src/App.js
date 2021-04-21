import React, { useEffect } from 'react';
import {Searchbar} from './components/layout/Searchbar';
import { Logs } from "./components/logs/Logs";

import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <Searchbar />
      <Logs />
    </>
  );
}

export default App;
