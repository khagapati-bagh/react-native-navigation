import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       title: 'Test',
//       headerStyle: styles.optinHeaderStyle,
//       headerTitleStyle: styles.optionHeaderTitleStyle,
//     }}>
//     <HomeStack.Screen name="Home" component={HomeScreen} />
//   </HomeStack.Navigator>
// );

// const DetailStackScreen = ({navigation}) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       title: 'Test',
//       headerStyle: styles.optinHeaderStyle,
//       headerTitleStyle: styles.optionHeaderTitleStyle,
//     }}>
//     <DetailsStack.Screen
//       name="Details"
//       component={DetailsScreen}
//       options={{
//         title: 'Details Page',
//       }}
//     />
//   </DetailsStack.Navigator>
// );

// const MainTabScreen = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#e91e63"
//       barStyle={{backgroundColor: 'tomato'}}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStackScreen}
//         options={{
//           tabBarIcon: ({color}) => (
//             <Icon name="ios-home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Details"
//         component={DetailsStackScreen}
//         options={{
//           tabBarIcon: ({color}) => (
//             <Icon name="ios-notifications" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <Icon name="ios-person" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Setting"
//         component={SettingScreen}
//         options={{
//           tabBarLabel: 'Setting',
//           tabBarIcon: ({color}) => (
//             <Icon name="ios-list" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     color: '#000',
//   },
//   optinHeaderStyle: {
//     backgroundColor: '#FF9A00',
//   },
//   optionHeaderTitleStyle: {
//     fontWeight: 'bold',
//   },
//   button: {
//     paddingBottom: 50,
//   },
// });

// export default MainTabScreen;

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} />
  </DetailsStack.Navigator>
);
