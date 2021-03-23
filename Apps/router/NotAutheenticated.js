import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import SignIn from '../screen/SignIn';
import Register from '../screen/Register';

const Stack = createStackNavigator();

const NotAuthenticated = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.SignIn}>
                <Stack.Screen name={Routes.SignIn} component={SignIn} options={{headerShown: false}}/>
                <Stack.Screen name={Routes.Register} component={Register} options={{headerShown: false}}/>
                {/* <Stack.Screen name={Routes.Detailed} component={Detailed}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NotAuthenticated;
