import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import InvoiceMenu from './components/InvoiceMenu'

import DropDown from './components/DropDown';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SingleItemData from './SingleItemData';
import Update from './components/Update';


// import AddInvoice from './components/AddInvoice';


function App() {

  return (
    <>

   <BrowserRouter>
   <Navbar />
   <Routes >
   <Route path="/"  element={ <InvoiceMenu />}/>
    <Route path="/single"  element={ <SingleItemData />}/>
    
   </Routes>
   
  
   </BrowserRouter>
    {/* <FormCard /> */}
    {/* <AddInvoice /> */}
   
    
    </>
  );
}

export default App;
