import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'; 
import { useNavigation } from '@react-navigation/native';  
import AssistanceImage from '../assets/assistance.jpg';
import SelfImage from '../assets/self.jpg';
import EmergencyImage from '../assets/health-insurance.png'; 
import CCImage from '../assets/customer care.jpg';

const data = [
        {
            id: 1,
            title: 'Assistance',
            image: AssistanceImage,
            screen: 'MapScreen'
        },
        {
            id: 2,
            title: 'Self-Exploration',
            image: SelfImage,
            screen: 'OtherScreen'
        },
        {
            id: 3,
            title: 'Emergency',
            image: EmergencyImage,
            screen: 'OtherScreen'
        },
        {
            id: 4,
            title: 'Customer Care',
            image: CCImage,
            screen: 'OtherScreen'
        },
    ];


const Services = () => {
    const navigation = useNavigation();
    
    return (
            <FlatList
                className='list'
                showsHorizontalScrollIndicator={false}
                data={data}
                // horizontal
                keyExtractor={(item) => item.id}
                numColumns={2} // Set the number of columns to 2 for a 2x2 grid
                renderItem={({item})=> (
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate(item.screen)}
                    style={tw`p-4 bg-gray-200 m-2 w-40 rounded `}>
                       <View>
                            <Image 
                                style={{width: 120, height: 120, resizeMode: 'contain'}}
                                source={AssistanceImage} />
                            <Text style={styles.text}>{item.title}</Text>
                            <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                type='antdesign'
                                name='arrowright'
                                color='white'
                            />
                       </View>
                    </TouchableOpacity>
                )}      
            />
    );
};

const styles = StyleSheet.create({
    list: {
        backgroundColor:'black',

    },
    text: {
        marginTop:2,
        fontWeight:'bold',
        fontSize:15,
    },
    
});

export default Services;
