import { createSlice } from "@reduxjs/toolkit"

export const alarmsSlice = createSlice({
  name: "alarms", 
  initialState: [],
  reducers: {
    addAlarm: (state, action) => {
      state.push(action.payload)
      console.log("function completed");
      
    }

  }
})

export const { addAlarm } = alarmsSlice.actions;
export default alarmsSlice.reducer;