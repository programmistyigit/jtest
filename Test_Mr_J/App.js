import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bottomtab from './asosiy/Bottomtab';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
    <Bottomtab/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
