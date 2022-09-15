import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";


import DropDown from "./components/DropDown";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AddInvoice from "./Pages/AddInvoice";
import ViewInvoice from "./Pages/ViewInvoice";
import EditInvoice from "./Pages/EditInvoice";
import DeleteItem from "./components/DeleteItem";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/invoice-details" element={<ViewInvoice />} />
        
        </Routes>
        <AddInvoice />
        <EditInvoice />
        <DeleteItem />
      </BrowserRouter>

    </>
  );
}

export default App;
