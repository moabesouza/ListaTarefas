import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export  function List() {
  return (
    <View style={styles.container}>
      <Text>Lista de Tarefas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
