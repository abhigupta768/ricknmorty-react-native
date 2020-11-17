import{ 
    NavigationContainer 
} from '@react-navigation/native';
import { 
    createStackNavigator,
    StackScreenProps
} from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Details: {
      data: any
  };
};

const Stack = createStackNavigator<StackParamList>();

export default Stack;
export type TypeStackParamList = StackParamList;