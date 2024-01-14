import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Image,SafeAreaView,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AssistanceImage from '../assets/assistance.jpg';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import Location from '../assets/1x/baseline_place_black_24dp.png';

import WheelChairsList from '../components/WheelChairsList';


const OtherScreen = () => {
    const navigation = useNavigation();
    const [wheelChairChecked, setWheelChairChecked] = useState('');
    const [AssistantChecked, setAssistantChecked] = useState('');

   

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <ScrollView>
        <TouchableOpacity onPress={()=>navigation.goBack()}
                // style={tw`p-6 bg-gray-200 m-2 w-36 rounded `}
                >    
            <View style={{padding:20}}>
                <Icon
                                style={tw`p-2 bg-purple-900 rounded-full w-10 mt-4`}
                                type='antdesign'
                                name='arrowleft'
                                color='white'
                            />
            </View>
        </TouchableOpacity>
        <Image style={{ width: '100%', height: 175, resizeMode: 'contain' }}
                source={AssistanceImage} />
        <View style={styles.Box}>
            <Text style={styles.Text}>Do you require a wheelchair? </Text>
            <RadioButton.Group onValueChange={value =>setWheelChairChecked(value)} value={wheelChairChecked}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="yes" />
          <Text>Yes</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="no" />
          <Text>No</Text>
        </View>
      </RadioButton.Group>
        </View>

        <View style={styles.Box}>
            <Text style={styles.Text}>Prefered gender for assisting individual </Text>
            <RadioButton.Group onValueChange={value =>setAssistantChecked(value)} value={AssistantChecked}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="male" />
          <Text>Male</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="female" />
          <Text>Female</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="any" />
          <Text>No Preference</Text>
        </View>
      </RadioButton.Group>
        </View>


        <View style={styles.Box}>
         <Text style={{fontSize:20, fontWeight:'900', color:'#663399',margin:20,textAlign:'center'}}>SELECT WHEELCHAIR </Text>

      <WheelChairsList/>
      </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('MapScreen')}
                style={styles.mapButton}
                >    
                <Text style={tw`text-gray-100 text-center text-lg`}>SET DELIVERY LOCATION</Text>
                <Image source={Location}></Image>
            </TouchableOpacity>
        </View>

    </ScrollView>
    </SafeAreaView>
  );
}

export default OtherScreen;

const styles = StyleSheet.create({
    Box: {
        flexDirection:'column',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        shadowColor: '#663399',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:20,
        padding:10,
      
    },
    Text:{
        fontSize:17,
        margin:15,
        fontWeight:'900',
        color:'#663399',
    },

    
    mapButton: {
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor: '#663399',
        padding:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around',
    },

})