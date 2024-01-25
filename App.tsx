import React from 'react';
import { TaskProvider } from './src/context/taskContext';
import { Home } from "./src/screens/Home";
import { Create } from "./src/screens/Create";
import { Edit } from "./src/screens/Edit";
import { List } from "./src/screens/List";
import { Dashboard } from './src/screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Search } from './src/screens/Search';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Create: undefined;
  Edit: undefined;
  Detail: undefined;
  Dashboard: undefined;
  Search: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <TaskProvider>
        <RootStack.Navigator initialRouteName="List">
          <RootStack.Screen name="List" component={List} options={{ headerShown: false }} />
          <RootStack.Screen name="Edit" component={Edit} options={{ headerShown: false }} />
          <RootStack.Screen name="Create" component={Create} options={{ headerShown: false }} />
          <RootStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          {/* <RootStack.Screen name="Search" component={Search} options={{ headerShown: false }} /> */}
        </RootStack.Navigator>
      </TaskProvider>
    </NavigationContainer>
  );
}
