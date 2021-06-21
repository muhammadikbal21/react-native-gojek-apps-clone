import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
              <Image source={require('./icon/search.png')} style={{position: 'absolute', top: 5, left: 12}} />
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>
        </View>
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/home-active.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/order.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/help.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/inbox.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/account.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
