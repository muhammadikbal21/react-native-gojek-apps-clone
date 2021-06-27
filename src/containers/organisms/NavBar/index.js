import { withNavigation } from '@react-navigation/compat'
import React, { Component } from 'react'
import { View } from 'react-native'
import { NavBarIcon } from '../../../components/molecules'

export class NavBar extends Component {
  render() {
    return (
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#E8E8E8' }}>
        <NavBarIcon title="Home" img={require('../../../assets/icon/home-active.png')} active onPress={() => this.props.navigation.navigate('Home')} />
        <NavBarIcon title="Orders" img={require('../../../assets/icon/order.png')} onPress={() => this.props.navigation.navigate('Order')} />
        <NavBarIcon title="Help" img={require('../../../assets/icon/help.png')} onPress={() => this.props.navigation.navigate('Help')} />
        <NavBarIcon title="Inbox" img={require('../../../assets/icon/inbox.png')} onPress={() => this.props.navigation.navigate('Inbox')} />
        <NavBarIcon title="Account" img={require('../../../assets/icon/account.png')} onPress={() => this.props.navigation.navigate('Account')} />
      </View>
    )
  }
}

export default withNavigation(NavBar)
