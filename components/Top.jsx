import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import UserImage from '../assets/profile-icon.png'
import { TouchableOpacity } from 'react-native'

const Top = () => {
  return (
    <View style={styles.topContainer}>
      <Text style={{fontSize:35, color:'#663399'}}>YULIN!</Text>
        <TouchableOpacity>
          <Image style={{ width: 38, height: 38, resizeMode: 'contain'}}
                source={UserImage} /> 
        </TouchableOpacity>
    </View>
  )
}

export default Top;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 15,
        borderBottomColor: 'black',
    },
})