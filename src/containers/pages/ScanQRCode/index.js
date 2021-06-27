import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const IconWithText = () => {
  return (
    <View>
      <View />
      <Text>Phone Number</Text>
    </View>
  )
}

const IconAction = () => {
  return (
    <View>
      <Text>i</Text>
    </View>
  )
}

const ScanQRCode = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <View>
          <IconAction />
          <View>
            <IconAction />
            <IconAction />
          </View>
        </View>
      </View>
      <View style={{height: 150, backgroundColor: 'white', paddingHorizontal: 16}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>More Options</Text>
          <Text style={{fontSize: 14, color: 'green', fontWeight: 'bold'}}>SHORTCUT</Text>
        </View>
        <View>
          <View>
            <IconWithText />
            <IconWithText />
          </View>
          <View>
            <Text>Your recent GoPay receivers will show here. No admin feels!</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ScanQRCode

const styles = StyleSheet.create({})
