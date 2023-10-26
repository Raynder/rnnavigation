import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Home from '../telas/Home'
import MelhoresProdutores from '../telas/MelhoresProdutores';
import Produtor from '../telas/Produtor';

export default function AppRotas() {
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
        </Tab.Navigator>
    </NavigationContainer>
}