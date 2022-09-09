import React, { useState } from "react";

import { SinupValdation } from "./validatorForm";

import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

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
      quantity: "",
      item: "",
    },
  ],
};

const ShowForm = () => {
  const [items, setItems] = useState([]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={SinupValdation}
      onSubmit={async (values) => {
        // local storage used

        alert(JSON.stringify(values, null, 2));
        // localStorage.setItem('items', JSON.stringify(values))
        const data = JSON.parse(localStorage.getItem("items"));
        // if (items) {
        //  setItems(items);
        // }
        if (data == null) {
          localStorage.setItem("items", JSON.stringify([values]));
          //  setItems(values);
        } else {
          localStorage.setItem("items", JSON.stringify([...data, values]));
          // setItems(...items,values);
        }

        //  console.log(items)
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <h4 className="mt-4" style={{ color: "#7C5DFA" }}>
              Bill From
            </h4>
            {/* from bill start */}
            <p className="text-gray-500">Street Address</p>
            <Field
              className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
              name="StreetAdrees_from"
            />
            <ErrorMessage
              name="StreetAdrees_from"
              component="div"
              className="text-red-600"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-3">
            <div>
              <p className="text-gray-600">City</p>
              <Field
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                name="city_from"
              />
              <ErrorMessage
                name="city_from"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className="text-gray-400">Post code</p>
              <Field
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                name="postCode_from"
              />
              <ErrorMessage
                name="postCode_from"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className="text-gray-400">Country</p>
              <Field
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
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
            <p className="text-gray-400">Client's Name</p>
            <Field
              className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
              name="cliendName_to"
            />
            <ErrorMessage
              name="cliendName_to"
              component="div"
              className="text-red-600"
            />
          </div>

          <div>
            <p className="text-gray-400">Client's Email</p>
            <Field
              className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
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
            <p className="text-gray-400">Street Address</p>
            <Field
              className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
              name="cliendAdress"
            />
            <ErrorMessage
              name="cliendAdress"
              component="div"
              className="text-red-600"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-3">
            <div>
              <p className="text-gray-400">City</p>
              <Field
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                name="cliendCity"
              />
              <ErrorMessage
                name="cliendCity"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className="text-gray-400">Post code</p>
              <Field
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                name="cliendPost"
              />
              <ErrorMessage
                name="cliendPost"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className="text-gray-400">Country</p>
              <Field
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
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

          <div className="grid grid-cols-2  lg:gap-3">
            <div>
              <p className="text-gray-400">Invoice Date</p>
              <Field
                type="date"
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                name="dateInvoice"
              />
              <ErrorMessage
                name="dateInvoice"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <p className="text-gray-400">payment term</p>
              {/* payment method  */}
              {/* <Field type="text"  className='h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] ' name="paymentTerm"  />
        <ErrorMessage name='paymentTerm' component="div" className='text-red-600'/> */}
              <select
                name="paymentTerm"
                className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
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
            </div>
          </div>

          <div>
            <p className="text-gray-400">Project description</p>
            <Field
              className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
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
            <div className="grid grid-cols-5 mt-2 pl-2 gap-3 ">
              <p className="text-gray-400">Item Name</p>
              <p className="text-gray-400">Qty.</p>
              <p className="text-gray-400">Price</p>
              <p className="text-gray-400">Total</p>
            </div>

            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div>
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div
                        className="grid grid-cols-5 mt-2 pl-2 gap-3 "
                        key={index}
                      >
                        <div>
                          {/* <label htmlFor={`friends.${index}.name`}>Name</label> */}
                          <Field
                            name={`friends.${index}.name`}
                            className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                            placeholder="Name"
                            type="text"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="text-red-400"
                          />
                        </div>
                        <div>
                          {/* <label htmlFor={`friends.${index}.email`}>Email</label> */}
                          <Field
                            name={`friends.${index}.quantity`}
                            className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                            placeholder="Quantity"
                            type="number"
                          />
                          <ErrorMessage
                            name={`friends.${index}.quantity`}
                            component="div"
                            className="text-red-400"
                          />
                        </div>
                        <div>
                          {/* <label htmlFor={`friends.${index}.email`}>Email</label> */}
                          <Field
                            name={`friends.${index}.item`}
                            className="h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA] "
                            placeholder="item"
                            type="number"
                          />
                          <ErrorMessage
                            name={`friends.${index}.item`}
                            component="div"
                            className="text-red-400"
                          />
                        </div>
                        {/* total start */}
                        <div>
                          <input
                            type="text"
                            className="h-14 mt-1 rounded-lg w-full  placeholder:text-black placeholder:text-center"
                            disabled
                            name="total"
                            value={parseInt(
                              values.friends[0].item *
                                values.friends[0].quantity
                            )}
                            placeholder={parseInt(
                              values.friends[0].item *
                                values.friends[0].quantity
                            )}
                          />
                        </div>
                        <div>
                          {/* toatl end */}
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="secondary w-52 rounded-3xl p-2 mt-4"
                    style={{ color: "white", backgroundColor: "red" }}
                    onClick={() => push({ name: "", quantity: "", item: "" })}
                  >
                    <i class="fa-solid fa-plus"></i> Add Item
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          {/* button */}

          <div className="grid grid-cols-3  lg:gap-3 shadow-zinc-900 shadow-lg h-28 px-5 pt-10 pb-5 rounded-3xl mt-10 bg-transparent w-5/5">
            <div>
              <button
                className="rounded-3xl bg-slate-300 py-3 px-4 text-white"
                type="button"
              >
                Discard
              </button>
            </div>
            <div></div>
            <div>
              <button
                className="rounded-3xl bg-[#7C5DFA] py-2 px-2 text-white"
                type="submit"
              >
                Save & Send
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ShowForm;
