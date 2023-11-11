// BottomBar.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import tw from 'twrnc';


const BottomBar = ({name, setIsProfileOpen}) => {
  const [level, setLevel] = useState(50); // Initial level

  // Replace the image URL with the path to your profile picture
  const profileImageUrl = ''; // Add your profile picture URL here

  return (
    <View style={styles.container}>
      <View style={tw`flex-row justify-between items-center w-screen rounded-8 p-8 bg-gray-500`}>
        <View style={styles.centerContent}>
          {profileImageUrl ? (
            <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
          ) : (
            <View style={[styles.profileImage, styles.defaultProfileImage]}>
              <Text style={tw`font-bold text-3xl text-black`}>{name.charAt(0).toUpperCase()}</Text>
            </View>
          )}
          <TouchableOpacity style={tw`items-center justify-center p-4 rounded-4 bg-blue-950 border m-1`} onPress={() => setIsProfileOpen(true)}>
            <Text style={styles.nameText}>{name}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.levelText}>Level: {level}</Text>
      </View>
      <View style={styles.levelBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'middle',
    margin: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'grey',
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  defaultProfileImage: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 18,
    color: 'black',
  },
  nameText: {
    fontSize: 18,
    color: 'white',
  },
  levelText: {
    fontSize: 18,
    color: 'white',
  },
});

export default BottomBar;
