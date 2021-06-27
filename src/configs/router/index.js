import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Account, Help, Home, Inbox, NewsDetail, Order } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} options={{headerShown: false}} />
      <Stack.Screen name="Order" component={Order} options={{headerShown: false}} />
      <Stack.Screen name="Help" component={Help} options={{headerShown: false}} />
      <Stack.Screen name="Inbox" component={Inbox} options={{headerShown: false}} />
      <Stack.Screen name="Account" component={Account} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
