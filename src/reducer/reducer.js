const initialState = {

   storeVal:[],
   addInvoiceOpen:false,
   editInvoiceData:{},
   editInvoiceOpen:false,
   localData:[],
   viewData:[],
   deleteOpen:false,
   deleteData:"",

       
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

           editInvoiceData:action.payload.drawerData,
           editInvoiceOpen:action.payload.drawerOpen
           
               }
               case 'LOCAL_DATA':
                return {
                ...state,
                localData:action.payload

                
                    }
                    case 'VIEW_DATA':
                        return {
                        ...state,
                        viewData:action.payload
        
                        
                            }            
                            case 'DELETE_INVOICE':
                                return {
                                ...state,
                     
                                deleteData:action.payload.Data,
                                deleteOpen:action.payload.Open
                                
                                    }
      
 
       default:
           return state
   }
}
export default DataFilter;