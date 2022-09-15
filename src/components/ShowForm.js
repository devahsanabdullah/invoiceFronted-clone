import React, { useState } from "react";

import { SinupValdation } from "./validatorForm";
import { useDispatch } from "react-redux";

import { Formik, Field, Form, ErrorMessage, FieldArray,getIn} from "formik";
import { useNavigate } from "react-router-dom";


const ShowForm = () => {
  function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
  }
  function generate() {
    let length = 3;
    let len = 2;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    let result = " ";
    let numb = "";
    const charactersLength = characters.len;
    const numberLenght = number.length;
    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for (let i = 0; i < length; i++) {
      result += number.charAt(Math.floor(Math.random() * numberLenght));
    }
    return result + numb;
  }
  const uniqeKey = generate();
  
  const initialValues = {
    // from bill start
  
    hash: uniqeKey,
    StreetAdrees_from: "",
    city_from: "",
    postCode_from: "",
    country_from: "",
    // from bill end to bill start
    cliendName_to: "",
    cliendEmail_to: "",
    cliendAdress: "",
    cliendCity: "",
    cliendPost: "",
    cliend_country: "",
    // end cliend info
    total: "",
    dateInvoice: "",
    paymentTerm: "",
    description: "",
    status: "pending",
    friends: [
      {
        name: "",
        quantity: 0,
        item: 0,
      },
    ],
  };
  

  const navigate = useNavigate();
  const dispatch =useDispatch();
  const styles = "h-14 mt-1 pl-4 font-bold text-base rounded-md w-full border-[#dfe3fa] border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]";
  const stylePara="text-[#7e88c3] pt-4 font-medium text-base leading-6 font-sans";
React.useEffect(() => {
  generate()

 
}, [initialValues])


  return (


    <div className="">

    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={SinupValdation}
      onSubmit={async (values) => {
        // local storage used

        // alert(JSON.stringify(values, null, 2));
        // localStorage.setItem('items', JSON.stringify(values))
        const data = JSON.parse(localStorage.getItem("items"));
        // if (items) {
        //  setItems(items);
        // }
        if (data == null) {
          localStorage.setItem("items", JSON.stringify([values]));
          //  setItems([values]);
          dispatch({type:"LOCAL_DATA",payload:[values]})
        } else {
          localStorage.setItem("items", JSON.stringify([...data, values]));
          //  setItems([...data,values]);
          dispatch({type:"LOCAL_DATA",payload:[...data,values]})
        }   
       dispatch({type:"OPEN_ADD_INVOICE",payload:false})

       generate()
  
      

      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit,errors,formProps }) => (
        <Form onSubmit={handleSubmit}>
          
        <div className="relative mt-6 flex-1 px-8 ml-2 md:ml-6 md:mr-6 sm:px-6">

          <div>
            <h4 className="mt-4" style={{ color: "#7C5DFA" }}>
              Bill From
            </h4>
            {/* from bill start */}
            <p className={stylePara}>Street Address</p>
            <Field
              className={styles}
              name="StreetAdrees_from"
            />
            <ErrorMessage
              name="StreetAdrees_from"
              component="div"
              className="text-red-600"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
            <div>
              <p className={stylePara}>City</p>
              <Field
                className={styles}
                name="city_from"
              />
              <ErrorMessage
                name="city_from"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className={stylePara}>Post code</p>
              <Field
                className={styles}
                name="postCode_from"
              />
              <ErrorMessage
                name="postCode_from"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className={stylePara}>Country</p>
              <Field
                className={styles}
                name="country_from"
              />
              <ErrorMessage
                name="country_from"
                component="div"
                className="text-red-600"
              />
            </div>
          </div>
          {/* from bill end   to bill start*/}

          <h4 className="mt-4" style={{ color: "#7C5DFA" }}>
            Bill To
          </h4>

          <div>
            <p className={stylePara}>Client's Name</p>
            <Field
              className={styles}
              name="cliendName_to"
            />
            <ErrorMessage
              name="cliendName_to"
              component="div"
              className="text-red-600"
            />
          </div>

          <div>
            <p className={stylePara}>Client's Email</p>
            <Field
              className={styles}
              type="email"
              placeholder="e.g email@example.com"
              name="cliendEmail_to"
            />
            <ErrorMessage
              name="cliendEmail_to"
              component="div"
              className="text-red-600"
            />
          </div>

          <div>
            <p className={stylePara}>Street Address</p>
            <Field
              className={styles}
              name="cliendAdress"
            />
            <ErrorMessage
              name="cliendAdress"
              component="div"
              className="text-red-600"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
            <div>
              <p className={stylePara}>City</p>
              <Field
                className={styles}
                name="cliendCity"
              />
              <ErrorMessage
                name="cliendCity"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className={stylePara}>Post code</p>
              <Field
                className={styles}
                name="cliendPost"
              />
              <ErrorMessage
                name="cliendPost"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className={stylePara}>Country</p>
              <Field
                className={styles}
                name="cliend_country"
              />
              <ErrorMessage
                name="cliend_country"
                component="div"
                className="text-red-600"
              />
            </div>
          </div>
          {/* end cliend information */}

          <div className="grid md:grid-cols-2 grid-cols-1  lg:gap-3">
            <div>
              <p className={stylePara}>Invoice Date</p>
              <Field
                type="date"
                className={`${styles} cursor-pointer` }
                name="dateInvoice"
              />
              <ErrorMessage
                name="dateInvoice"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className={stylePara}>payment term</p>
              
              <select
                name="paymentTerm"
                className={`${styles} cursor-pointer`}
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
              >
                <option value="" label="Select a payment">
                  Select a payment{" "}
                </option>
                <option value="red" label="Net 1 day">
                  {" "}
                  Net 1 day
                </option>
                <option value="Net 7 day" label="Net 7 day"></option>

                <option value="Net 14 days" label="Net 14 days">
                  Net 14 days
                </option>
                <option value="Net 30 days" label="Net 30 days">
                  Net 30 days
                </option>
              </select>
              <ErrorMessage
              name="paymentTerm"
              component="div"
              className="text-red-600"
            />
              
            </div>
            
          </div>

          <div>
            <p className={stylePara}>Project description</p>
            <Field
              className={styles}
              name="description"
              placeholder="e.g. Graphic Design Services"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600"
            />
          </div>

          {/* Link arrray start */}

          <div>
            <h1 className="font-bold text-3xl" style={{ color: "#7C5DFA" }}>
              Item List
            </h1>
           

            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div>
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div
                      className="grid grid-cols-6 mt-2  gap-3 "
                      key={index}
                    >
                      <div className="col-span-2" >
                      <p className={stylePara}>Item Name</p>
                        <Field
                          name={`friends.${index}.name`}
                          className={`${styles} mr-8 `}
                          style={getStyles(errors, `friends.${index}.name`)}
                          
                      
                          type="text"
                        />
                        {/* <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="text-red-400"
                        /> */}
                      </div>
                      <div className="flex flex-col justify-center items-center" >
                      <p className={`${stylePara}  mr-4 w-1`}>Qty.</p>
                        <Field
                          name={`friends.${index}.quantity`}
                          className={`${styles} ml-2 mr-4 w-18 pl-1`}
                        
                          style={getStyles(errors, `friends.${index}.quantity`)}
                          type="number"
                        
                        />
                        <ErrorMessage
                          name={`friends.${index}.quantity`}
                          component="div"
                          className="text-red-400"
                        />
                      </div>
                      <div>
                                          <p className={`${stylePara}  ml-4 w-12`}>Price</p>
                                              <Field
                                                name={`friends.${index}.item`}
                                                className={`${styles}  ml-2 mr-4 w-18 pl-1`}
                                              
                                              
                                                style={getStyles(errors, `friends.${index}.item`)}
                                                type="number"
                                              />
                                              {/* <ErrorMessage
                                                name={`friends.${index}.item`}
                                                component="div"
                                                className="text-red-400 "
                                              /> */}
                                              </div>


                        <div>
                        <p className={`${stylePara} ml-4 mr-4 w-10`}>Total</p>
                        <div className="flex justify-center items-center pt-4 font-bold"> {((values.friends[index].quantity)*(values.friends[index].item))}</div>
                            </div>
                      

                      <div className="flex justify-center items-cente pt-12">
                        
                        {index===0?null:<button
                          type="button"
                          className="secondary text-red-600"
                          onClick={() => remove(index)}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>}
                      </div>
                    </div>
                    ))}
                  <button
                    type="button"
                    className="bg-slate-700 w-full mt-7 text-center  hover:bg-slate-600 p-3.5 rounded-full text-white cursor-pointer"
                    
                    onClick={() => push({ name: "", quantity:"", item:"" })}
                  >
                    <i class="fa-solid fa-plus"></i> Add Item
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          {/* button */}

          
        </div>
        <div className="flex justify-between   shadow-lg border-t-black px-5 pt-10 pb-5 mt-10 bg-transparent w-5/5">
            <div>
              <button
                className="rounded-3xl bg-slate-500 py-3 px-4 text-white font-bold hover:bg-[#8e72fe]"
                type="button"
                onClick={() => dispatch({type:"OPEN_ADD_INVOICE",payload:false})}
              >
                Discard
              </button>
            </div>
            <div></div>
            <div>
              <button
                className=" bg-[#7C5DFA] hover:bg-[#8e72fe] text-white  rounded-3xl  w-40 h-12 font-bold ml-2"
                type="submit"
              >
                Save & Send
              </button>
            </div>
          </div>
        </Form>

      )}
    </Formik>
    </div>

  );
};

export default ShowForm;
