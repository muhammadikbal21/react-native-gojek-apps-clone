import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const IconWithText = (props) => {
  return (
    <View>
      <View style={{width: 60, height: 60, backgroundColor: 'green', borderRadius: 70}} />
      <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>{props.title}</Text>
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
      <View style={{height: 250, backgroundColor: 'white', paddingHorizontal: 16}}>
        <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
          <View style={{width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1}} />
          <View style={{width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>More Options</Text>
          <Text style={{fontSize: 14, color: 'green', fontWeight: 'bold'}}>SHORTCUT</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start', width: 150, justifyContent: 'space-between'}}>
            <IconWithText title="Phone Number" />
            <IconWithText title="GoPay Code" />
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