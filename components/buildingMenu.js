// BottomBar.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import tw from 'twrnc';

const BuildingMenu = ({name, setIsProfileOpen}) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.centerContent}>
        <TouchableOpacity style={tw`items-center justify-center p-4 rounded-4 bg-blue-950 border m-1`} >
            <Text style={styles.nameText}>Attack</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center justify-center p-4 rounded-4 bg-blue-950 border m-1`}>
            <Text style={styles.nameText}>Upgrade</Text>
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
    justifyContent: 'flex-end',
    alignItems: 'baseline',
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
  levelBar: {
    height: 1,
    backgroundColor: '#ff0023',
  },
});

export default BottomBar;
