import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const weatherSlice = createSlice({
  name: "weather", 
  initialState: {
    "longitude": "",
    "latitude": "",
    "currentWeather": ""
  },
  reducers: {
    addLong: (state, action) => state["longitude"] = action.payload,
    addLat: (state, action) => state["latitude"] = action.payload,
    currentWeather: (state, action) => state["currentWeather"] = action.payload
  }
})

export const selectLong = state => state.weather["longitude"]
export const selectLat = state => state.weather["latitude"]
// export const fetchWeather = async dispatch => {
//   try {
//     const res = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${selectLat}&lon=${selectLong}&appid=ddd0bb2b5a159e40998d41b0d1725c2b`)
//     dispatch(currentWeather(res.data))
//   } catch (error) {
//     console.log(error);
    
//   }
// }

export const selectWeather = state => state.weather.currentWeather

export const { addLat, addLong, currentWeather } = weatherSlice.actions;
export default weatherSlice.reducer;