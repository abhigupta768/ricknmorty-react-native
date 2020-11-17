import React from 'react';

import HomeScreen from './components/screens/home';
import DetailsScreen from './components/screens/detail';
import Stack from './components/navigation/navigation';

import{ 
    NavigationContainer 
} from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options= {{headerShown: false}}/>
                <Stack.Screen name='Details' component={DetailsScreen} options= {{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
