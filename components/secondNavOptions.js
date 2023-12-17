import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'; 
import { useNavigation } from '@react-navigation/native'  
const data = [
        {
            id: 1,
            title: 'Get a Ride',
            image: 'https://links.papareact.com/3pn',
            screen: 'MapScreen'
        },
        {
            id: 2,
            title: 'Order Food',
            image: 'https://links.papareact.com/28w',
            screen: 'OtherScreen'
        }
    ];


const secondNavOptions = () => {
    const navigation = useNavigation();
    
    return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item})=> (
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate(item.screen)}
                    style={tw`p-6 bg-gray-200 m-2 w-36 rounded `}>
                       <View>
                            <Image 
                                style={{width: 120, height: 120, resizeMode: 'contain'}}
                                source={{uri: item.image}}/>
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
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
    
});

export default secondNavOptions;
