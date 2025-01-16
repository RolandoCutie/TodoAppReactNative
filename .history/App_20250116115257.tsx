import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{flexDirection: 'row',}}>
     <Text>Open up App.tsx to start working on your app!</Text>
     <View style={styles.divider}></View>

     </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor:Colors.lightBlue,
    height: 1,
    flex: 1,
    a
  }
});
