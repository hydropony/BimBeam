import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';

// flex: 1,
//     justifyContent: 'center',
//     alignItems: 'middle',
//     margin: 8,

const Profile = ({ playerName, items, healthPoints, attackPoints, accuracyPoints, setIsProfileOpen }) => {
  return (
    <View style={styles.container}>
      <View style={tw`flex-col justify-between items-center w-screen rounded-16 p-16 bg-gray-500`}>
        <View style={tw`flex-col justify-between items-center`}>
          <Text style={tw`text-2xl font-bold mb-2`}>{playerName}</Text>

          <View style={tw`mb-2`}>
            <Text style={tw`text-lg font-bold`}>Items:</Text>
            <Text style={tw`text-gray-700 text-lg font-bold`}>{items}</Text>
          </View>

          <View style={tw`mb-2`}>
            <Text style={tw`text-lg font-bold`}>Health Points:</Text>
            <Text style={tw`text-gray-700 text-lg font-bold`}>{healthPoints}</Text>
          </View>

          <View style={tw`mb-2`}>
            <Text style={tw`text-lg font-bold`}>Attack Points:</Text>
            <Text style={tw`text-gray-700 text-lg font-bold`}>{attackPoints}</Text>
          </View>

          <View>
            <Text style={tw`text-lg font-bold`}>Accuracy:</Text>
            <Text style={tw`text-gray-700 text-lg font-bold`}>{accuracyPoints}</Text>
          </View>

          <TouchableOpacity style={tw`items-center justify-center bg-blue-950 rounded-4 p-4 border m-1`} onPress={() => setIsProfileOpen(false)}>
            <Text style={tw`text-white text-lg`}>Return</Text>
          </TouchableOpacity>
        </View>
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
        margin: 0,
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

export default Profile;

// return (
//         <View style={tw`flex-1 w-screen rounded-16 p-16 bg-gray-500 justify-center items-center m-8`}>
//             <View style={tw`flex-col justify-between items-center`}>
//                 <Text style={tw`text-2xl font-bold mb-2`}>{playerName}</Text>

//                 <View style={tw`mb-2`}>
//                     <Text style={tw`text-lg font-bold`}>Items:</Text>
//                     <Text style={tw`text-gray-700`}>{items}</Text>
//                 </View>

//                 <View style={tw`mb-2`}>
//                     <Text style={tw`text-lg font-bold`}>Health Points:</Text>
//                     <Text style={tw`text-gray-700`}>{healthPoints}</Text>
//                 </View>

//                 <View style={tw`mb-2`}>
//                     <Text style={tw`text-lg font-bold`}>Attack Points:</Text>
//                     <Text style={tw`text-gray-700`}>{attackPoints}</Text>
//                 </View>

//                 <View>
//                     <Text style={tw`text-lg font-bold`}>Accuracy:</Text>
//                     <Text style={tw`text-gray-700`}>{accuracy}</Text>
//                 </View>

//                 <TouchableOpacity style={tw`items-center justify-center bg-blue-950 rounded-4 p-4 border m-1`} onPress={() => setIsProfileOpen(false)}>
//                     <Text style={tw`text-white text-lg`}>Return</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );