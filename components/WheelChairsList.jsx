import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Image1 from '../assets/wheelchair-1.jpg';
import Image2 from '../assets/wheelchair-2.jpg';
import Image3 from '../assets/wheelchair-3.jpg';
import Image4 from '../assets/wheelchair-4.jpg';

const WheelChairsList = () => {
        const [selectedItemId, setSelectedItemId] = useState(null);
     const data = [
        {
            id: 1,
            title: 'Wheelchair Type 1',
            image: Image1,
            screen: 'MapScreen'
        },
        {
            id: 2,
            title: 'Wheelchair Type 2',
            image: Image2,
            screen: 'MapScreen'
        },
        {
            id: 3,
            title: 'Wheelchair Type 3',
            image: Image3,
            screen: 'MapScreen'
        },
        {
            id: 4,
            title: 'Wheelchair Type 4',
            image: Image4,
            screen: 'MapScreen'
        },
    ];

    const handleItemPress = (itemId) => {
    setSelectedItemId(itemId);
    navigation.navigate('MapScreen');
    console.log('Navigating to:', 'MapScreen');
  };

  const renderItem = ({ item }) => (

    <TouchableOpacity
      onPress={() => handleItemPress(item.id)}
      style={[
        styles.itemBox,
        {
          backgroundColor: selectedItemId === item.id ? 'lightblue' : 'white',
        },
      ]}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 15,
          }}
        >
          {item.title}
        </Text>
        <Image
          style={{ width: 100, height: 120, resizeMode: 'contain' }}
          source={item.image}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      className='list'
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default WheelChairsList

const styles = StyleSheet.create({

    itemBox: {
      padding:10,
      backgroundColor:'white',
    //   margin:10,
    //   borderRadius:10,
      elevation:5,
      width:'100%',
      borderColor:'gray',
    //   borderBottomWidth:0.5,
      borderTopWidth:0.5,
    //   margin: 5,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    // borderRadius: 5,
    }
})