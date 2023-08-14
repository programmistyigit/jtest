import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bottomtab from './asosiy/Bottomtab';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';

import Test from './components/Test';

 function App1() {
  const typer=useSelector((e)=>e.typer)
 
  return (
    <>
      {typer.typer==0? <Bottomtab/>:<Test/>}
    </>
  );
}


export default function App() {

  return (
    <Provider store={store}>
      <App1 />
    </Provider>
  )
}


const styles = StyleSheet.create({
  
});
