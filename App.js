// import React from 'react'
// import { View, Text, } from 'react-native'


// const App = () => {
//   return(
//     <View>
//       <Text>hi</Text>
//     </View>
//   )
// }


// export default App


import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


// import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChatScreen from './src/ChatScreen'
import MessagesScreen from './src/MessagesScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  
    const getTabBarVisibility = (route) => {
      const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';
  
      if (routeName === 'Chat') {
        return false;
      }
      return true;
    }

  const MessageStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route}) => ({
          title: route.params.userName,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen
    name="Messages"
    component={MessageStack}
    options={({route}) => ({
      tabBarVisible: getTabBarVisibility(route),
      // Or Hide tabbar when push!
      // https://github.com/react-navigation/react-navigation/issues/7677
      // tabBarVisible: route.state && route.state.index === 0,
      // tabBarLabel: 'Home',
      tabBarIcon: ({color, size}) => (
        <Ionicons
          name="chatbox-ellipses-outline"
          color={color}
          size={size}
        />
      )
    })
  }
  />


{/* <Tab.Screen name="ChatScreen" component={ChatScreen} /> */}
  </Tab.Navigator>
  </NavigationContainer>

  );
};

export default App;

