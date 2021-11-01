import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './app/screen/MainScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main Screen" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
