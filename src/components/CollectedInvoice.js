import React, { useEffect, useState } from 'react';
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const CollectedInvoice = ({ setstate }) => {
  const [items, setItems] = useState([]);


  const dispatch = useDispatch();

  const selector = useSelector((state) => state)



  useEffect(() => {
    let value = JSON.parse(localStorage.getItem('items'))



    setItems(value);

  }, [])




  const val = items.filter((data) => {

    if (selector.storeVal === "all") {
      return data;

    }
    if (data.status === selector.storeVal) {

      return data;
    }


  })







  setstate(val.length)

  return (
    <>

      {val && val.map((data) => {
        var sum = parseInt(data.friends[0].quantity * data.friends[0].item);
       








        return (
          <Link to={`/single`} state={{ data }}>
            <div className='grid grid-cols-3  md:grid-cols-5  px-5 shadow-lg bg-white h-42 md:h-20 justify-center items-center shadow-slate-500 rounded-2xl w-6/6 hover:border-[#7C5DFA] mt-4' >
              <h1 className='font-extrabold p-4 '>#{data.hash}</h1>
              <h1 className='text-lg p-4 text-gray-500'>{data.dateInvoice}</h1>
              <h1 className='text-lg  text-gray-500'>{data.friends[0].name}</h1>
              <h1 className='text-lg p-4 pl-5 font-extrabold'>${sum}</h1>
              <div className='text-lg p-4 '>
                {data.status === "pending" ?
                  <h1 className='bg-[#f8f8f8] text-center font-bold capitalize rounded-md text-[#ff8f00] justify-center  p-1'>{data.status}</h1>
                  : <h1 className='bg-[#f8f8f8] text-center font-bold rounded-md capitalize  text-lime-500 justify-center p-1'>{data.status}</h1>}
              </div>

            </div>
          </Link>
        )
      })}

    </>
  )
}

export default CollectedInvoice