import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import Authenticated from './Authenticated'
import NotAuthenticated from './NotAutheenticated'

const Stack = createStackNavigator();

export const RootNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name={Routes.NotAuthenticated} component={NotAuthenticated} />
                <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}