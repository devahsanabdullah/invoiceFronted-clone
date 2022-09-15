import React, { useState } from "react";
import DropDown from "../components/DropDown";

import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Total=0;
const Home = () => {
  // let [state, setstate] = useState(0);

  const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  const selector = useSelector((state) => state);

 
  const newData =selector.localData
  React.useEffect(() => {
   

    
    let value = JSON.parse(localStorage.getItem('items')) || [];
   

    setItems(value);
  


    // if(newData== null||undefined){

    //   setItems([value]);
    // }else{

    //   setItems([value])
    // }
   
     dispatch({type:"SET_DATA",payload:"all"})
   }, [newData]);

  
  
    
  

  const val = items?.filter((data) => {
    if (selector.storeVal === "all") {
      return data;
    }
    if (data.status === selector.storeVal) {
      return data;
    }
  });

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center ml-10 pt-52 md:pl-12">
        <div>
          <h1 className="font-bold text-3xl">Invoices</h1>
          <p>There are {val&&val.length} total invoices</p>
        </div>
        {/* drop down */}
        <div className="md:pl-12  lg:pl-28">
          <DropDown />
        </div>

        <div className="pl-16">
          <button
            class="bg-[#7C5DFA] hover:bg-blue-700 text-white font-bold text-center  py-2 px-2 justify-center rounded-full flex content-center"
            onClick={() => dispatch({type:"OPEN_ADD_INVOICE",payload:true})}
            
          >
            <img
              src="images\plus.svg"
              alt="+"
              className="p-1 w-5 bg-white rounded-3xl "
            />
            {/* <span className='md:visible  lg:invisible visible'>New</span> */}
            <p className="pl-1">
              New{" "}
              <span className="lg:visible  md:invisible invisible pl-1">
                Invoice{" "}
              </span>
            </p>
          </button>
        </div>
      </div>
      {/* inoice colllction data */}
      <div className="flex flex-col items-center justify-center  mt-12 md:pl-12">
        {/* <CollectedInvoice setstate={setstate} /> */}
        <>
          {val.length >0?val.map((data,index) => {
             

               var sum = data.friends.reduce((accumulator, object,index) => {
     return accumulator + (object.quantity * object.item);      }, 0)
 
           
             

              return (
                <Link to={`/invoice-details`}   onClick={()=>  dispatch({ type: "VIEW_DATA", payload: data})} >
                  <div >
                  <div className="grid grid-cols-3  md:grid-cols-5  px-5  bg-white  justify-center items-center hover:border-[#7C5DFA] border-transparent border  shadow-lg  transition-all ease-in    rounded-lg w-6/6  mt-4">
                    <h1 className="font-extrabold p-4 ">
                      #{data.hash}
                    </h1>
                    <h1 className=" p-4 text-gray-500">
                      {data.dateInvoice}
                    </h1>
                    <h1 className=" overflow-hidden text-gray-500 w-32 text-center">
                      {(data.cliendName_to).slice(0,14).concat("...")}
                    </h1>
                    <h1 className=" p-4 pl-5 font-extrabold">${sum}</h1>
                    <div className=" p-4 ">
                      {data.status === "pending" ? (
                        <h1 className="bg-[#ff8f000f] text-center text-sm capitalize rounded-md text-[#ff8f00] justify-center  p-1">
                          {data.status}
                        </h1>
                      ) : (
                        <h1 className="bg-lime-100 text-center text-sm capitalize rounded-md text-lime-400 justify-center  p-1">
                          {data.status}
                        </h1>
                      )}
                    </div>
                  </div>
                  </div>
                </Link>
              );
            }):<div className="w-72 h-96 text-center">
              <img src="images/empty.svg" className="pl-5"/>
              <h1 className="font-extrabold text-center pt-10 text-2xl">There is nothing here</h1>
              <p className="block pt-5 ">Create an invoice by clicking the <span className="font-bold text-md text-black">New Invoice</span>  button and get started, or change the <span className="font-bold text-md text-black"> Filter by Status</span></p></div>}
        </>
      </div>
    </>
  );
};

export default Home;


// ff8f000f