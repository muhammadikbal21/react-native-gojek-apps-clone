import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { GoBanner, GoInfo, GoNews, SearchFeature } from '../../../components/molecules'
import { HomeGopay, HomeMainFeature, NavBar, ScrollableProducts } from '../../../containers/organisms'

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <SearchFeature />
          {/* gopay */}
          <HomeGopay />
          {/* main feature */}
          <HomeMainFeature />
          {/* pembatas */}
          <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}} />
          {/* news section */}
          <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
          {/* internal information section (login with facebook) */}
          <GoInfo />
          {/* gofood banner section */}
          <GoBanner />
          {/* nearby gofood */}
          <ScrollableProducts />
        </ScrollView>
        {/* bottom navigation */}
        <NavBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
