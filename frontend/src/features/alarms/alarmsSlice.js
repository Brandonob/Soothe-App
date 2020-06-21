import { createSlice } from "@reduxjs/toolkit"

export const alarmsSlice = createSlice({
  name: "alarms", 
  initialState: {
    "currentAlert": "",
    "alarms": []
  },
  reducers: {
    addAlarm: (state, action) => {
      state["alarms"].push(action.payload)
      // console.log("function completed");
    },
    deleteAlarm: (state, action) => state["alarms"].filter(el => el.time !== action.payload),
    currentAlarm: (state, action) => state["currentAlert"] = action.payload

  }
})

export const selectAlarms = state => state.alarms

export const { addAlarm, deleteAlarm, currentAlarm } = alarmsSlice.actions;
export default alarmsSlice.reducer;