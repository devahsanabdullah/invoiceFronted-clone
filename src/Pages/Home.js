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
    console.log("🚀 ~ file: Home.js ~ line 23 ~ React.useEffect ~ value", value)

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
        <div className="md:pl-56 pl-16">
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
          {val &&
            val.map((data,index) => {
             

               var sum = data.friends.reduce((accumulator, object,index) => {
     return accumulator + (object.quantity * object.item);      }, 0)
 
           
             

              return (
                <Link to={`/invoice-details`}   onClick={()=>  dispatch({ type: "VIEW_DATA", payload: data})} >
                  <div >
                  <div className="grid grid-cols-3  md:grid-cols-5 hover:shadow-sm px-5 shadow-lg bg-white h-42 md:h-20 justify-center items-center hover:outline-[#7C5DFA] hover:outline-3 hover:outline shadow-slate-500 rounded-2xl w-6/6  mt-4">
                    <h1 className="font-extrabold p-4 ">
                      {data.hash}
                    </h1>
                    <h1 className="text-lg p-4 text-gray-500">
                      {data.dateInvoice}
                    </h1>
                    <h1 className="text-lg  text-gray-500 w-32 text-center">
                      {data.cliendName_to}
                    </h1>
                    <h1 className="text-lg p-4 pl-5 font-extrabold">${sum}</h1>
                    <div className="text-lg p-4 ">
                      {data.status === "pending" ? (
                        <h1 className="bg-[#f8f8f8] text-center font-bold capitalize rounded-md text-[#ff8f00] justify-center  p-1">
                          {data.status}
                        </h1>
                      ) : (
                        <h1 className="bg-[#f8f8f8] text-center font-bold rounded-md capitalize  text-lime-500 justify-center p-1">
                          {data.status}
                        </h1>
                      )}
                    </div>
                  </div>
                  </div>
                </Link>
              );
            })}
        </>
      </div>
    </>
  );
};

export default Home;
