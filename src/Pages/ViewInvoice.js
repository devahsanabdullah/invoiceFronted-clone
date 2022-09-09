import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";

import { BiChevronLeft } from "react-icons/bi";
import { useDispatch } from "react-redux";
// import Update from './components/Update';

const ViewInvoice = () => {
  const [items, setItems] = useState([]);
  const [openDraw, setOpenDraw] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state.data;
  useEffect(() => {
    let value = JSON.parse(localStorage.getItem("items"));

    setItems(value);
  }, []);

  const removeData = (id) => {
    const val = items.filter((item) => item.hash !== id);
    localStorage.setItem("items", JSON.stringify(val));
    if (items.length === 0) {
      localStorage.removeItem("items");
    }
    navlink("/");
  };
  //  status changer
  const changeStatus = async () => {
    let newobj = {
      ...data,
      status: "paid",
    };

    let items = await JSON.parse(localStorage.getItem("items"));

    for (let i = 0; i < items.length; i++) {
      if (newobj.hash === items[i].hash) {
        items[i] = newobj;
      }
    }
    localStorage.setItem("items", JSON.stringify(items));
    navlink("/");
  };

  // end
  const navlink = useNavigate();

  var sum = parseInt(data.friends[0].quantity * data.friends[0].item);

  return (
    <>
      <div className="grid justify-center items-center w-full lg:w-full  pt-12">
        <div>
          <button onClick={() => navlink("/")}>GO BACK</button>
        </div>
        <div className=" py-5 sm:px-6 grid md:grid-cols-2 grid-cols-1 mb-5 shadow-2xl   bg-[#f8f8f8] rounded-2xl mt-4 h-42 md:h-28">
          <div className="flex justify-center flex-wrap items-center ">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mr-4">
              status
            </h3>
            {data.status === "pending" ? (
              <button className="text-[#ff8f00] font-bold capitalize bg-orange-100 w-24 h-12 rounded-md">
                {data.status}
              </button>
            ) : (
              <button className="text-lime-500 font-bold capitalize bg-lime-100 w-24 h-12 rounded-md">
                {data.status}
              </button>
            )}
          </div>

          <div className="flex justify-center flex-wrap mt-3">
            {/* <Update data={data} /> */}

            <button
              className="rounded-3xl bg-gray-200 text-[#7e88c3] w-20 h-12 font-bold ml-2"
              onClick={() => dispatch({ type: "EDIT_INVOICE", payload: data })}
            >
              Edit
            </button>

            <button
              className="rounded-3xl bg-[#ec5757] text-[#ffff] w-24 h-12 font-bold ml-2"
              onClick={() => removeData(data.hash)}
            >
              Delete
            </button>
            {data.status === "pending" ? (
              <button
                className="rounded-3xl bg-[#7c5dfa] text-[#ffff] w-36 h-12 p-2 ml-2 font-[Spartan]  font-medium"
                onClick={changeStatus}
              >
                Mark as Pending
              </button>
            ) : null}
          </div>
        </div>
        <div className="overflow-hidden bg-white shadow-2xl sm:rounded-lg rounded-3xl ">
          <div className="grid  grid-cols-3 p-7 gap-11 ">
            <div>
              <h1 className="text-black font-extrabold font-sans">
                #{data.hash}
              </h1>
              <h1 className="text-[#7e88c3] font-medum">{data.description}</h1>
            </div>
            <div></div>
            <div className="flex flex-col justify-end flex-wrap">
              <h1 className="text-[#7e88c3] font-medum">
                {data.StreetAdrees_from}
              </h1>
              <h1 className="text-[#7e88c3] font-medum">{data.city_from}</h1>
              <h1 className="text-[#7e88c3] font-medum">
                {data.postCode_from}
              </h1>
              <h1 className="text-[#7e88c3] font-medum">{data.country_from}</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 p-7 gap-11">
            <div>
              <h1 className="text-[#7e88c3] font-medum">Invoice Date</h1>
              <h1 className="text-black font-extrabold font-sans">
                {data.dateInvoice}
              </h1>
              <h1 className="text-[#7e88c3] font-medum">Payment Due</h1>
              <h1 className="text-black font-extrabold font-sans">
                {data.paymentTerm}
              </h1>
            </div>
            <div>
              <h1 className="text-[#7e88c3] font-medum">Bill To</h1>
              <h1 className="text-black font-extrabold font-sans">
                {data.cliendName_to}
              </h1>
              <h1 className="text-[#7e88c3] font-medum">{data.cliendAdress}</h1>
              <h1 className="text-[#7e88c3] font-medum">{data.cliendCity}</h1>
              <h1 className="text-[#7e88c3] font-medum">{data.cliendPost}</h1>
              <h1 className="text-[#7e88c3] font-medum">
                {data.cliend_country}
              </h1>
            </div>
            <div>
              <h1 className="text-[#7e88c3] font-medum">Sent To</h1>
              <h1 className="text-black font-extrabold font-sans">
                {data.cliendEmail_to}
              </h1>
            </div>
          </div>
          <div className="shadow-lg  bg-[#f8f8f8] w-11/12 m-8   rounded-3xl">
            <div className="grid grid-cols-5 p-4">
              <div>
                <h1 className="text-[#7e88c3] font-medum">Item Name</h1>
                <h1>{data.friends[0].name}</h1>
              </div>
              <div></div>
              <div>
                <h1 className="text-[#7e88c3] font-medum">Qty</h1>
                <h1>{data.friends[0].quantity}</h1>
              </div>

              <div>
                <h1 className="text-[#7e88c3] font-medum">Price</h1>
                <h1>{data.friends[0].item}</h1>
              </div>

              <div>
                <h1 className="text-[#7e88c3] font-medum">total</h1>
                <h1>${sum}</h1>
              </div>
            </div>

            <div className="grid grid-cols-3 bg-black text-white p-5 rounded-xl">
              <h1>AMOUNT DUE</h1>
              <div></div>
              <h1>${sum}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInvoice;
