import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import Home from '../screen/Home';

const Stack = createStackNavigator();

const Authenticated = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.Home}>
                <Stack.Screen name={Routes.Home} component={Home} />
                {/* <Stack.Screen name={Routes.Detailed} component={Detailed}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Authenticated;
