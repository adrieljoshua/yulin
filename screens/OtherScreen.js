import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Image,SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AssistanceImage from '../assets/assistance.jpg';
const MapScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
                // style={tw`p-6 bg-gray-200 m-2 w-36 rounded `}
                >    
            <View style={{padding:20}}>
                <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                type='antdesign'
                                name='arrowleft'
                                color='white'
                            />
            </View>
        </TouchableOpacity>
        <Image style={{ width: '100%', height: 175, resizeMode: 'contain' }}
                source={AssistanceImage} />
        <View style={styles.wheelChairBox}>
            <Text style={styles.WheelChairText}>Do you require a wheelchair? </Text>
        </View>
    </SafeAreaView>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
    wheelChairBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom:10,
        marginLeft:3,
        marginRight:3,
        marginTop:3,
        elevation:3,
        fontFamily:'',
        marginTop:10,
    },
    WheelChairText:{
        fontSize:20,
        padding:15,
    }
})