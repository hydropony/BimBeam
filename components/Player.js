import React from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import tw from 'twrnc';

const playerStyle = StyleSheet.create({
    circle: {
      width: 500, // Adjust the size of the circle as needed
      height: 500,
      borderRadius: 500,
      backgroundColor: 'blue', // Adjust the background color as needed
    },
  });
   
const Player = () => {
  return (
    <View style={tw`flex-10 items-center justify-center`}>
      <View style={tw`border border-gray-300 rounded-full h-150 w-150 items-center justify-center`}>
        <Text style={tw`text-black text-center font-bold text-3xl`}>( ͡~ ͜ʖ ͡°)</Text>
      </View>
    </View>
  );
}
  
  const { height, width } = Dimensions.get('window');

export default Player;