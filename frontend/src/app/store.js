import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import alarmsReducer from '../features/alarms/alarmsSlice'
import weatherReducer from '../features/weather/weatherSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    alarms: alarmsReducer,
    weather: weatherReducer,
  },
});
