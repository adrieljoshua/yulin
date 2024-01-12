import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/navOptions';
import Top from '../components/Top'
import Services from '../components/services';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Top/>
                <Offer/>
                {/* <NavOptions /> */}
                <Services />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;
