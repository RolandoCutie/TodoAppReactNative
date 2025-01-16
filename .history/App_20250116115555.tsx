import { StyleSheet, View, Text } from 'react-native';
import { Colors } from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{flexDirection: 'row',}}>
     <View style={styles.divider}/>
     <Text style={styles.}>TODO APP</Text>

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
    alignSelf: 'center',
  }
});
