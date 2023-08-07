import { createSlice,PayloadAction } from "@reduxjs/toolkit"

const type = createSlice({
  name: "type",
  initialState: {
    type: 0
  },
  reducers: {
    setType(state, action) {
        state.message = action.payload
  }
}
})
export const { setType } = type.actions
export default type.reducer