import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ShowForm from "../components/ShowForm";
import { useSelector,useDispatch } from "react-redux";
export default function AddInvoice() {
  const open = useSelector((state) => state.addInvoiceOpen);
  const dispatch = useDispatch();
  const dispatchFun = () => {
    // return dispatch({type:"OPEN_ADD_INVOICE",payload:false})
  };

  
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={dispatchFun}>
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
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
                <Transition.Child as={Fragment}>
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child as={Fragment}>
                      <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
                    </Transition.Child>
                    <div className="flex h-full  md:w-[650px] flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <h1 className="font-bold text-3xl">New Invoice</h1>
                        </Dialog.Title>
                      </div>
                      <div >
                        {/* Replace with your content */}
                        <ShowForm />

                        
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
