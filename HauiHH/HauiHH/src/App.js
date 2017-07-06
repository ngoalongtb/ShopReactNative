
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import {StackNavigator} from 'react-navigation';

import MainScreen from './screens/MainScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import SideBarScreen from './screens/SideBarScreen';
import FlashScreen from './screens/FlashScreen';
import HomeScreen from './screens/HomeScreen';
import ChangeInfoScreen from './screens/ChangeInfoScreen';
import ListProductScreen from './screens/ListProductScreen';
import ShopScreen from './screens/ShopScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import DetailOrderScreen from './screens/DetailOrderScreen';
import SearchScreen from './screens/SearchScreen';
import ContactScreen from './screens/ContactScreen';

const StackNav = StackNavigator({
  Flash:{screen:FlashScreen},
  Main: {screen: MainScreen},
  Welcome:{screen:WelcomeScreen},
  SignUp:{screen:SignUpScreen},
  SignIn:{screen:SignInScreen},
  Home:{screen:HomeScreen},
  SideBar:{screen:SideBarScreen},
  Edit:{screen:MainScreen},
  ChangeInfo:{screen:ChangeInfoScreen},
  ListProduct:{screen:ListProductScreen},
  Shop:{screen:ShopScreen},
  Detail:{screen:DetailScreen},
  Cart:{screen:CartScreen},
  OrderHistory:{screen:OrderHistoryScreen},
  DetailOrder:{screen:DetailOrderScreen},
  Search:{screen:SearchScreen},
  Contact:{screen:ContactScreen}
},{
  headerMode:'none'
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNav/>
      </Provider>
    );
  }
}
