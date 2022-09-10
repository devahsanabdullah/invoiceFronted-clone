/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { SinupValdation } from "../components/validatorForm";

import { useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { useSelector, useDispatch } from "react-redux";

export default function EditInvoice() {
  const open = useSelector((state) => state.editInvoiceOpen);
  const data = useSelector((state) => state.editInvoiceData);
  console.log("🚀 ~ file: EditInvoice.js ~ line 15 ~ EditInvoice ~ data", data)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const styles = "h-14 mt-1 rounded-lg w-full border-gray-400 border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]";

  const OpenVal = () => {

    return dispatch({ type: "EDIT_INVOICE", payload: {drawerOpen:false,drawerData:data} })
  };
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={OpenVal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pl-10">
                <Transition.Child as={Fragment}>
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child as={Fragment}>
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
                    </Transition.Child>
                    <div className="flex h-full   md:w-[650px] flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <h1 className="font-extrabold "></h1>
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}

                        <Formik
                          enableReinitialize
                          initialValues={data}
                          validationSchema={SinupValdation}
                          onSubmit={async (values) => {
                            // alert(JSON.stringify(values, null, 2));
                            let items = await JSON.parse(
                              localStorage.getItem("items")
                            );

                            for (let i = 0; i < items.length; i++) {
                              if (values.hash === items[i].hash) {
                                items[i] = values;
                                console.log(items[i]);
                              }
                            }
                            localStorage.setItem(
                              "items",
                              JSON.stringify(items)
                            );
                            dispatch({ type: "EDIT_INVOICE", payload: {drawerOpen:false,drawerData:data} })

                            navigate("/");
                          }}
                        >
                          {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                          }) => (
                            <Form onSubmit={handleSubmit}>
                              <div>
                                <h4
                                  className="mt-4"

                                >
                                  Bill From
                                </h4>

                                <p className="text-gray-500">Street Address</p>
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
                              <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-3">
                                <div>
                                  <p className="text-gray-600">City</p>
                                  <Field className={styles} name="city_from" />
                                  <ErrorMessage
                                    name="city_from"
                                    component="div"
                                    className="text-red-600"
                                  />
                                </div>
                                <div>
                                  <p className="text-gray-400">Post code</p>
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
                                  <p className="text-gray-400">Country</p>
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

                              <h4 className="mt-4" style={{ color: "#7C5DFA" }}>
                                Bill To
                              </h4>

                              <div>
                                <p className="text-gray-400">Client's Name</p>
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
                                <p className="text-gray-400">Client's Email</p>
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
                                <p className="text-gray-400">Street Address</p>
                                <Field className={styles} name="cliendAdress" />
                                <ErrorMessage
                                  name="cliendAdress"
                                  component="div"
                                  className="text-red-600"
                                />
                              </div>
                              <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-3">
                                <div>
                                  <p className="text-gray-400">City</p>
                                  <Field className={styles} name="cliendCity" />
                                  <ErrorMessage
                                    name="cliendCity"
                                    component="div"
                                    className="text-red-600"
                                  />
                                </div>
                                <div>
                                  <p className="text-gray-400">Post code</p>
                                  <Field className={styles} name="cliendPost" />
                                  <ErrorMessage
                                    name="cliendPost"
                                    component="div"
                                    className="text-red-600"
                                  />
                                </div>
                                <div>
                                  <p className="text-gray-400">Country</p>
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

                              <div className="grid grid-cols-2  lg:gap-3">
                                <div>
                                  <p className="text-gray-400">Invoice Date</p>
                                  <Field
                                    type="date"
                                    className={styles}
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

                                  <select
                                    name="paymentTerm"
                                    className={styles}
                                    value={values.color}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                   style={{ display: "block" }}
                                  >
                                    <option value="" label="Select a payment">
                                      Select a payment{" "}
                                    </option>
                                    <option value="Net 1 day" label="Net 1 day">
                                      {" "}
                                      Net 1 day
                                    </option>
                                    <option
                                      value="Net 7 day"
                                      label="Net 7 day"
                                    ></option>

                                    <option
                                      value="Net 14 days"
                                      label="Net 14 days"
                                    >
                                      Net 14 days
                                    </option>
                                    <option
                                      value="Net 30 days"
                                      label="Net 30 days"
                                    >
                                      Net 30 days
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div>
                                <p className="text-gray-400">
                                  Project description
                                </p>
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

                              <div>
                                <h1
                                  className="font-bold text-3xl"
                                  style={{ color: "#7C5DFA" }}
                                >
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
                                              <Field
                                                name={`friends.${index}.name`}
                                                className={styles}
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
                                              <Field
                                                name={`friends.${index}.quantity`}
                                                className={styles}
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
                                              <Field
                                                name={`friends.${index}.item`}
                                                className={styles}
                                                placeholder="item"
                                                type="number"
                                              />
                                              <ErrorMessage
                                                name={`friends.${index}.item`}
                                                component="div"
                                                className="text-red-400"
                                              />
                                            </div>

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
                                              {values.friends.length===1?null:<button
                                                type="button"
                                                className="secondary"
                                                onClick={() => remove(index)}
                                              >
                                                <i class="fa-solid fa-trash"></i>
                                              </button>}
                                            </div>
                                          </div>
                                        ))}
                                      <button
                                        type="button"
                                        className="secondary w-52 rounded-3xl p-2 mt-4"
                                        style={{
                                          color: "white",
                                          backgroundColor: "red",
                                        }}
                                        onClick={() =>
                                          push({
                                            name: "",
                                            quantity: "",
                                            item: "",
                                          })
                                        }
                                      >
                                        <i class="fa-solid fa-plus"></i> Add
                                        Item
                                      </button>
                                    </div>
                                  )}
                                </FieldArray>
                              </div>

                              <div className="flex flex-warp shadow-zinc-900 shadow-lg h-28 px-5 pt-10 pb-5 rounded-3xl mt-10 bg-transparent w-5/5">
                                <div></div>
                                <div>
                                  <button
                                    className="rounded-3xl bg-slate-300 py-3 px-4 text-white"
                                    type="button"
                                   onClick={() => dispatch({ type: "EDIT_INVOICE", payload: {drawerOpen:false,drawerData:data} })}
                                  >
                                    Discard
                                  </button>
                                </div>

                                <div>
                                  <button
                                    className="rounded-3xl bg-[#7C5DFA] py-2 px-2 text-white"
                                    type="submit"
                                  >
                                    Save & Change
                                  </button>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* <button
        className="rounded-3xl bg-gray-200 text-[#7e88c3] w-20 h-12 font-bold ml-2"
        onClick={() => setOpen(true)}
      >
        Edit
      </button> */}
    </>
  );
}





