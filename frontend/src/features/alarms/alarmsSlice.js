import { createSlice } from "@reduxjs/toolkit"

export const alarmsSlice = createSlice({
  name: "alarms", 
  initialState: {
    "currentTime": "",
    "alarms": []
  },
  reducers: {
    addAlarm: (state, action) => {
      state["alarms"].push(action.payload)
      // console.log("function completed");
    },
    deleteAlarm: (state, action) => state["alarms"].filter(el => el.time !== action.payload)

  }
})

export const selectAlarms = state => state.alarms

export const { addAlarm, deleteAlarm } = alarmsSlice.actions;
export default alarmsSlice.reducer;