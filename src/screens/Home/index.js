import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RunScreen from './Run';
import ActivityScreen from './Activity';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../../../constants/colors';

const HomeScreen = () => {
    const Tab = createMaterialTopTabNavigator();

  return (
        <NavigationContainer>
            <Tab.Navigator 
            className=""
            screenOptions={{
              tabBarLabelStyle: {fontSize:12},
              tabBarLabelStyle:{color:colors.tabsColor, fontWeight:"bold"},
              }}>
                <Tab.Screen name="startarun" component={RunScreen} 
                options={{
                  tabBarLabel:"Start A Run",
                  }}/>
                <Tab.Screen name="Activity" component={ActivityScreen} 
                options={{
                  }}/>
            </Tab.Navigator>
        </NavigationContainer>
  )
}

export default HomeScreen