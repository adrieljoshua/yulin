import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import UserImage from '../assets/favicon.png'

const Top = () => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.hey}>
            Hey,<Text className='username'> Aisha! </Text>
        </Text>
        <Image style={{width: 45, height: 45, resizeMode: 'contain'}}
               source={UserImage} /> 
    </View>
  )
}

export default Top;

const styles = StyleSheet.create({
    hey: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 20,
        borderBottomColor: 'black',
    },
})