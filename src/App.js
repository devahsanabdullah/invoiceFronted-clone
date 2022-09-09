import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import InvoiceMenu from "./components/InvoiceMenu";

import DropDown from "./components/DropDown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleItemData from "./SingleItemData";
import Update from "./components/Update";
import Home from "./Pages/Home";
import AddInvoice from "./Pages/AddInvoice";
import ViewInvoice from "./Pages/ViewInvoice";
import EditInvoice from "./Pages/EditInvoice";

// import AddInvoice from './components/AddInvoice';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<InvoiceMenu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/invoice-details/:hash" element={<ViewInvoice />} />
          <Route path="/single" element={<SingleItemData />} />
        </Routes>
        <AddInvoice />
        <EditInvoice />
      </BrowserRouter>
      {/* <FormCard /> */}
    </>
  );
}

export default App;
