import { configureStore } from '@reduxjs/toolkit';
import typer from './type';


export const store = configureStore({
  reducer: {
    typer:typer
  }
});
