import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Searchbar from './components/layout/Searchbar';
import Logs from "./components/logs/Logs";
import { AddBtn } from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import { AddTechModal } from "./components/techs/AddTechModal";
import { TechListModal } from "./components/techs/TechListModal";

import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Searchbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
