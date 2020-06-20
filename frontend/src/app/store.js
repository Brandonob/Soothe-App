import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import alarmsReducer from '../features/alarms/alarmsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    alarms: alarmsReducer

  },
});
