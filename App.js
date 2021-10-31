import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/screen/HomeScreen';
import DetailsScreen from './app/screen/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{
          title: 'Test',
          headerStyle: styles.optinHeaderStyle,
          headerTitleStyle: styles.optionHeaderTitleStyle,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Page',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 42}}
        />
      </Stack.Navigator>
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
