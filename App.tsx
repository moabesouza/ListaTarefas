
import { Home } from "./src/screens/Home";
import { Create } from "./src/screens/Create";
import { List } from "./src/screens/List";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Create: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="List">
        <RootStack.Screen name="List" component={List} options={{ headerShown: false }} />
        <RootStack.Screen name="Create" component={Create} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
