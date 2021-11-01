import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './app/screen/HomeScreen';
import DetailsScreen from './app/screen/DetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Details"
    //     screenOptions={{
    //       title: 'Test',
    //       headerStyle: styles.optinHeaderStyle,
    //       headerTitleStyle: styles.optionHeaderTitleStyle,
    //     }}>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         title: 'Home Page',
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Details"
    //       component={DetailsScreen}
    //       initialParams={{itemId: 42}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  optinHeaderStyle: {
    backgroundColor: '#FF9A00',
  },
  optionHeaderTitleStyle: {
    fontWeight: 'bold',
  },
  button: {
    paddingBottom: 50,
  },
});

export default App;
