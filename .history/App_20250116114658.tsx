import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{flexDirection: 'column'}}>
     <Text>Open up App.tsx to start working on your app!</Text>
     <Text>Open up App.tsx to start working on your app!</Text>
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
});
