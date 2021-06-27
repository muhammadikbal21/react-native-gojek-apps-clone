import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavBar } from '../../organisms/NavBar'

export default class Help extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text> Ini Help </Text>
        </View>
        <NavBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
