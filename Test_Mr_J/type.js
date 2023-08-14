import { createSlice,PayloadAction } from "@reduxjs/toolkit"

const typer = createSlice({
  name: "typer",
  initialState: {
    typer: 0
  },
  reducers: {
    setType(state, action) {
        state.typer = action.payload
  }
}
})
export const { setType } = typer.actions
export default typer.reducer