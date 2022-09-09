import React, { useState } from 'react'
import AddInvoice from './AddInvoice';

import DropDown from './DropDown'
import CollectedInvoice from './CollectedInvoice';
import {NavLink} from 'react-router-dom'


const InvoiceMenu = () => {
let [state,setstate]=useState(0)

  
  return (
    <>

    <div className='flex flex-row flex-wrap items-center justify-center ml-10 pt-52 md:pl-12'>
      
           
                <div>
                <h1 className='font-bold text-3xl'>Invoices</h1>
                <p>There are {state} total invoices</p>
                
                </div>
                {/* drop down */}
            <div className='md:pl-56 pl-16'>
        <DropDown />

            </div>
       
         <div className='pl-16'>
         <AddInvoice />

            </div>
          
            
    </div>
      {/* inoice colllction data */}
    <div className='flex flex-col items-center justify-center  mt-12 md:pl-12'>
               <CollectedInvoice setstate={setstate} />
            </div>
           
                </>
  )
}

export default InvoiceMenu;