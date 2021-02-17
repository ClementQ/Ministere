import React from 'react';
import About from './components/About'
import Search from './components/Search'
import Header from './components/Header'
import {Button,View, Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tabs = createMaterialTopTabNavigator();

// export default class App extends React.Component{
//   render(){
//     return (
//       <View>
//         <Text>Coucou</Text>
//       </View>
//     );
//   }
// }


const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render(){
    return (
      <View>
       <NavigationContainer>
         <Header></Header>
         <Tab.Navigator>
           <Tab.Screen name="about" component={About} />
           <Tab.Screen name="search" component={Search} />
           <Tab.Screen name="header" component={Header} />
         </Tab.Navigator>
        </NavigationContainer>
      </View> 
      
    );
  }
}