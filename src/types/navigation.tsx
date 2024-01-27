import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
    Home: undefined;
    Create: undefined;
    Edit: undefined;
    Dashboard: undefined;
    List: undefined;
    Details: undefined;
  };
  