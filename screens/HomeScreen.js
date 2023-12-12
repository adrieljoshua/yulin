import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/navOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                source={{uri:"https://links.papareact.com/gzs"}}
                style = {{width:100, height:100,resizeMode: "contain"}}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // text: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    // },
});

export default HomeScreen;
