import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Touchable, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';


export default function App() {
  const [count, setCount] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>POLLA</Text>
      <Text style={styles.textHuge}>{count}</Text>
      {/*<Pressable style={styles.floatingButtonleft} onPress={() => setCount(count - 1)} onLongPress={() => setCount(0)}> 
        <Text>-1</Text>
      </Pressable>
      <TouchableOpacity style={styles.floatingButtonright} onPress={() => setCount(count + 1)} onLongPress={() => setCount(count + 10)}>
        <Text>+1</Text>
      </TouchableOpacity>*/}
      <FAB label='+1' onPress={() => setCount(count + 1)} onLongPress={() => setCount(count + 10)}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252627',
    alignItems: 'center',
    justifyContent: 'center',
  },


    textHuge:{
    fontSize: 120,
    fontWeight: 'thin',
    color: "white"

    },
     
    floatingButtonleft:{
      position: 'absolute',
      bottom: 20,
      left: 20,
      backgroundColor: '#fdfdfd',
      padding: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      elevation: 3,
      shadowRadius: 4
  },
    floatingButtonright:{
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#fdfdff',
      padding: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      elevation: 3,
      shadowRadius: 4
  }

});
