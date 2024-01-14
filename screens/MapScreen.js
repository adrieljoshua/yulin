import React, { useState } from 'react';
import { View, TextInput, StyleSheet,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const MapScreen = () => {
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Delivery Location"
        value={deliveryLocation}
        onChangeText={(text) => setDeliveryLocation(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickupLocation}
        onChangeText={(text) => setPickupLocation(text)}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
});

export default MapScreen;
