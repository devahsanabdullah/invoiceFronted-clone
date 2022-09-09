const initialState = {

   storeVal:[],

       
 }
 
 const DataFilter = (state = initialState, action) => {
   switch(action.type){
       case 'SET_DATA':
           return {
           ...state,

           storeVal:action.payload
           
               }
     
 
       default:
           return state
   }
}
export default DataFilter;