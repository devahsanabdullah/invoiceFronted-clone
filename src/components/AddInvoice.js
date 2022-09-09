/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'x

import ShowForm from './ShowForm';
export default function AddInvoice() {
  const [open, setOpen] = useState(false)



  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
              <Transition.Child
                as={Fragment}
                // enter="transform transition ease-in-out duration-500 sm:duration-700"
                // enterFrom="translate-x-0"
                // enterTo="translate-x-0"
                // leave="transform transition ease-in-out duration-500 sm:duration-700"
                // leaveFrom="translate-x-0"
                // leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    // enter="ease-in-out duration-500"
                    // enterFrom="opacity-0"
                    // enterTo="opacity-100"
                    // leave="ease-in-out "
                    // leaveFrom="opacity-100"
                    // leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      {/* <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        x
                      </button> */}
                    </div>
                  </Transition.Child>
                  <div className="flex h-full  md:w-[650px] flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900"><h1 className='font-bold text-3xl'>New Invoice</h1></Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <ShowForm setOpen={setOpen}/>
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
    <button class="bg-[#7C5DFA] hover:bg-blue-700 text-white font-bold text-center  py-2 px-2 justify-center rounded-full flex content-center" onClick={()=>setOpen(true)}>
     
      <img src='images\plus.svg' alt='+' className='p-1 w-5 bg-white rounded-3xl '/>
      {/* <span className='md:visible  lg:invisible visible'>New</span> */}
        <p className='pl-1'>New <span className='lg:visible  md:invisible invisible pl-1'>Invoice </span></p>
  
    
</button>
    
    {/* <img src='images\Rectangle 3 (4).png' alt='click'  className='rounded-24px' /> */}

    </>
  )
}
