import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Player from './components/Player';
import RegistrationScreen from './components/RegistrationScreen';
import React, { useState } from 'react';
import BottomBar from './components/bottombar';
import Profile from './components/profile';
import Map from './components/maps';
// import 'dotenv/config.js'
import tw from 'twrnc';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [login, setLogin] = useState('');
  const [level, setLevel] = useState(1);
  const [healthPoints, setHealthPoints] = useState(100);
  const [attackPoints, setAttackPoints] = useState(5);
  const [accuracyPoints, setAccuracyPoints] = useState(60);
  
  console.log("isloggedin", isLoggedIn);
  console.log("login", login)
  console.log("isProfileOpen", isProfileOpen)

  if (isProfileOpen == false) {
      return (
        <View style={styles.container}>
          <Map> </Map>
          <StatusBar style="auto" />
          <BottomBar name={"John"} setIsProfileOpen={setIsProfileOpen}></BottomBar>
        </View>
      )
    }
  else if (isProfileOpen == true) {
    return (
      <View style={styles.container}>
        <Map> </Map>
        <StatusBar style="auto" />
        <Profile name={"John"} setIsProfileOpen={setIsProfileOpen} healthPoints={healthPoints} attackPoints={attackPoints} accuracyPoints={accuracyPoints}></Profile>
      </View>
    )
  }


  // if (isLoggedIn == false) {
  //   return (
  //     <View style={styles.container}>
  //       <StatusBar style="auto" />
  //       <RegistrationScreen setIsLoggedIn={setIsLoggedIn} setLogin={setLogin}/>
  //     </View>
  //   );
  // }
  // else if (isLoggedIn == true) {
  //   if (isProfileOpen == false) {
  //     // return (
  //       // <View style={tw`flex-1 justify-center items-center p-16 h-full`}>
  //       //   <StatusBar style="auto" />
  //       //   <Player></Player>
  //       //   <View style={{
  //       //     height: '15%',
  //       //     backgroundColor: 'powderblue',
  //       //   }}/>
  //       //   <BottomBar setIsProfileOpen={setIsProfileOpen} name={login}></BottomBar>
  //       // </View>
  //     // );
  //     return (
  //       <View style={tw``}>
  //         <StatusBar style='auto'></StatusBar>
  //         <View style={{height: "80%"}}>
  //           <Player></Player>
  //         </View>
  //         <View style={tw`h-1/5 w-full bg-transparent flex-auto`}>
  //           <BottomBar setIsProfileOpen={setIsProfileOpen} name={login}></BottomBar>
  //         </View>
  //       </View>
  //     );
  //   }
  //   else if (isProfileOpen == true) {
  //     return (
  //       <View style={tw``}>
  //         <StatusBar style='auto'></StatusBar>
  //         <View style={{height: "70%"}}>
  //           <Player></Player>
  //         </View>
  //         <View style={tw`h-1/3 w-full bg-transparent flex-auto`}>
  //           <Profile></Profile>
  //         </View>
  //       </View>
  //     );
  //   }
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
