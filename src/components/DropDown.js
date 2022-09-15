import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  const [storeVal,setStoreVal]= useState([]);
  const [isChecked, setIsChecked] = useState(Boolean);
  const [ischange, setIsChange] = useState(Boolean);
  const [isChanger, setIsChanger] = useState(Boolean);

  const dispatch=useDispatch();
  function handleChange(event) {

    if(event.target.value==="pending")
    {
     
        // setStoreVal("pending")
        setIsChecked(true);
        setIsChange(false);
        setIsChanger(false);
        dispatch({type:"SET_DATA",payload:"pending"})
     
     
        
    }
    if(event.target.value==="paid")
    {
     
        
        setIsChecked(false);
        setIsChange(true);
        setIsChanger(false);
        dispatch({type:"SET_DATA",payload:"paid"})
     
    }
    if(event.target.value==="all")
    {
      
        
        setIsChecked(false);
        setIsChange(false);
        setIsChanger(true);

        dispatch({type:"SET_DATA",payload:"all"})
      
     
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-none bg-transparent px-4 py-2 text-lg font-bold  text-gray-700  focus:outline-none  ">
        Filter by Status
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-[#7C5DFA]" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in "
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-46 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 <input id="checkbox-item-1"  type="checkbox" value="pending"  checked={isChecked } onClick={handleChange} class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label htmlFor="checkbox-item-1"  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pending</label>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                
                 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
             
                >
                 
                  <input id="checkbox-item-2" type="checkbox" value="paid" checked={ischange}  onChange={handleChange}   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                   <label 
                  htmlFor="checkbox-item-2" class="ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Paid</label>
   
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
               
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <input  id="checkbox-item-3" type="checkbox" value="all" onChange={handleChange}  checked={isChanger} class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label  htmlFor="checkbox-item-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}