import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
    const navigation = useNavigation();
  return (
      <TouchableOpacity
                onPress={()=>navigation.goBack()}
                style={tw`p-6 bg-gray-200 m-2 w-36 rounded `}
                >
            <View>
                <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                type='antdesign'
                                name='arrowleft'
                                color='white'
                            />
            </View>
        </TouchableOpacity>
  )
}

export default MapScreen;

const styles = StyleSheet.create({})