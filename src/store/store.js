import  {configureStore} from '@reduxjs/toolkit'
import DataFilter from '../reducer/reducer'
const store = configureStore({reducer:DataFilter});
export default store;
