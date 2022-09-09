const initialState = {

   storeVal:[],
   addInvoiceOpen:false,
   editInvoiceData:{},
   editInvoiceOpen:false
       
 }
 
 const DataFilter = (state = initialState, action) => {
   switch(action.type){
       case 'SET_DATA':
           return {
           ...state,

           storeVal:action.payload
           
               }
       case 'OPEN_ADD_INVOICE':
           return {
           ...state,

           addInvoiceOpen:action.payload
           
               }
                case 'EDIT_INVOICE':
           return {
           ...state,

           editInvoiceData:action.payload,
           editInvoiceOpen:true
           
               }
 
       default:
           return state
   }
}
export default DataFilter;