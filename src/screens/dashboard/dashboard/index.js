// import {Button, Text, View, StyleSheet, Image, FlatList} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Images from '../../../assets/images';
// import SegmentedControlTab from 'react-native-segmented-control-tab';
// import {ScrollView} from 'react-native-gesture-handler';

// export default function Home() {
//   const DATA = [
//     {
//       image: 'src/images/ic_chats_contacts.png',
//       name: 'Savannah Nguyen',
//       message: 'Tip Received from Mentee',
//       money: '$3',
//     },
//     {
//       image: 'src/images/ic_chats_contacts.png',
//       name: 'Jerome Bell',
//       message: 'Refunded Payment',
//       money: '$10',
//     },
//   ];

//   const [customStyleIndex, setCustomStyleIndex] = useState(0);

//   const handleCustomIndexSelect = index => {
//     setCustomStyleIndex(index);
//   };
//   return (
//     <ScrollView style={{flex: 1,backgroundColor:'white'}}>
//       <View style={styles.main}>
//         <View style={styles.container1}>
//           <View style={styles.container2}>
//             <Image source={Images.img1} style={styles.image1}></Image>
//           </View>
//           <View style={styles.container3}>
//             <Text style={styles.text1}>All payments received </Text>
//             <View style={styles.container4}>
//               <Text style={styles.text2}>$524178</Text>
//               <View style={styles.container5}>
//                 <Image source={Images.img2} style={styles.image2}></Image>
//                 <Text style={styles.text3}>7.52%</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.box1}>
//           <View style={styles.box2}>
//             <View style={styles.box3}>
//               <View>
//                 <Text style={{margin: 10, color: 'black', fontSize: 13}}>
//                   Pending Payments
//                 </Text>
//               </View>
//               <View style={styles.boxIn}>
//                 <Text
//                   style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
//                   $5241
//                 </Text>
//                 <Image source={Images.img3} style={styles.image3}></Image>
//               </View>
//             </View>
//             <View style={styles.box4}>
//               <View>
//                 <Text style={{margin: 10, color: 'black', fontSize: 13}}>
//                   Incentive Received
//                 </Text>
//               </View>
//               <View style={styles.boxIn}>
//                 <Text
//                   style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
//                   211{'  '}
//                 </Text>
//                 <Image source={Images.img4} style={styles.image3}></Image>
//               </View>
//             </View>
//           </View>
//           <View style={styles.box2}>
//             <View style={styles.box5}>
//               <View>
//                 <Text style={{margin: 10, color: 'black', fontSize: 13}}>
//                   Refunded Payments
//                 </Text>
//               </View>
//               <View style={styles.boxIn}>
//                 <Text
//                   style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
//                   515{'   '}
//                 </Text>
//                 <Image source={Images.img5} style={styles.image3}></Image>
//               </View>
//             </View>
//             <View style={styles.box6}>
//               <View>
//                 <Text style={{margin: 10, color: 'black', fontSize: 13}}>
//                   Tip Received-Mentee's
//                 </Text>
//               </View>
//               <View style={styles.boxIn}>
//                 <Text
//                   style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
//                   $41{'  '}
//                 </Text>

//                 <Image source={Images.img6} style={styles.image3}></Image>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={{flex: 0.5}}>
//           <SegmentedControlTab
//             values={['Day', 'Week', 'Month', 'Year']}
//             selectedIndex={customStyleIndex}
//             onTabPress={handleCustomIndexSelect}

//             tabsContainerStyle={styles.tabsContainer}
//             tabStyle={styles.tabStyle}
//             activeTabStyle={styles.activeTabStyle}
//             tabTextStyle={styles.tabTextStyle}
//             activeTabTextStyle={styles.activeTabTextStyle}
//           />

//           {customStyleIndex === 0 && (
//             <View>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <Text style={{fontSize: 25, color: 'black', fontWeight: '500'}}>
//                   Friday
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: 20,
//                     color: 'black',
//                     fontWeight: '500',
//                     marginLeft: 20,
//                   }}>
//                   01-20-2022
//                 </Text>
//               </View>
//               <FlatList
//                 data={DATA}
//                 renderItem={({item}) => (
//                   <View
//                     style={{
//                       flex: 1,
//                       height: 70,
//                       borderWidth: 0.5,
//                       marginVertical: 10,
//                       borderRadius: 12,
//                       // backgroundColor:'red',
//                       flexDirection: 'row',
//                     }}>
//                     <Image style={styles.image4} source={Images.img7}></Image>
//                     <View style={{flex: 1}}>
//                       <Text
//                         style={{
//                           marginHorizontal: 10,
//                           marginTop: 10,
//                           fontSize: 17,
//                           fontWeight: '500',
//                           color: 'black',
//                         }}>
//                         {item.name}
//                       </Text>
//                       <Text
//                         style={{
//                           marginHorizontal: 10,
//                           marginTop: 3,
//                           fontSize: 15,
//                           fontWeight: '500',
//                         }}>
//                         {item.message}
//                       </Text>
//                     </View>
//                     <Text
//                       style={{
//                         flex: 0.2,
//                         alignSelf: 'center',
//                         fontSize: 20,
//                         fontWeight: '700',

//                         color: 'black',
//                       }}>
//                       {item.money}
//                     </Text>
//                   </View>
//                 )}
//                 keyExtractor={item => item.id}
//               />
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <Text style={{fontSize: 25, color: 'black', fontWeight: '500'}}>
//                   Monday
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: 20,
//                     color: 'black',
//                     fontWeight: '500',
//                     marginLeft: 20,
//                   }}>
//                   01-16-2022
//                 </Text>
//               </View>
//               <FlatList
//                 data={DATA}
//                 renderItem={({item}) => (
//                   <View
//                     style={{
//                       flex: 1,
//                       height: 70,
//                       borderWidth: 0.5,
//                       marginVertical: 10,
//                       borderRadius: 12,
//                       // backgroundColor:'red',
//                       flexDirection: 'row',
//                     }}>
//                     <Image style={styles.image4} source={Images.img7}></Image>
//                     <View style={{flex: 1}}>
//                       <Text
//                         style={{
//                           marginHorizontal: 10,
//                           marginTop: 10,
//                           fontSize: 17,
//                           fontWeight: '500',
//                           color: 'black',
//                         }}>
//                         {item.name}
//                       </Text>
//                       <Text
//                         style={{
//                           marginHorizontal: 10,
//                           marginTop: 3,
//                           fontSize: 15,
//                           fontWeight: '500',
//                         }}>
//                         {item.message}
//                       </Text>
//                     </View>
//                     <Text
//                       style={{
//                         flex: 0.2,
//                         alignSelf: 'center',
//                         fontSize: 20,
//                         fontWeight: '700',

//                         color: 'black',
//                       }}>
//                       {item.money}
//                     </Text>
//                   </View>
//                 )}
//                 keyExtractor={item => item.id}
//               />
//             </View>
//           )}

//           {customStyleIndex === 1 && (
//             <View>
//               <Text>ddf</Text>
//             </View>
//           )}

//           {customStyleIndex === 2 && (
//             <View>
//               <Text>ddf</Text>
//             </View>
//           )}

//           {customStyleIndex === 3 && (
//             <View>
//               <Text>ddf</Text>
//             </View>
//           )}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     margin: 15,
//     backgroundColor:'white'
//   },
//   container1: {
//     flexDirection: 'row',
//     borderWidth: 0.5,
//     marginTop: 10,
//     alignItems: 'center',
//     padding: 10,
//     height: 80,
//     borderRadius: 12,
//     borderColor: '#313131',
//   },
//   container2: {
//     flex: 0.4,
//     borderRadius: 12,
//     backgroundColor: '#EB192Q',
//   },
//   container3: {
//     flex: 1,
//   },
//   container4: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   container5: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 30,
//   },
//   image1: {
//     height: '110%',
//     width: '80%',
//     borderRadius: 12,
//     marginLeft: 10,
//   },
//   image4: {
//     margin: 9.5,
//   },
//   text1: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'black',
//   },
//   text2: {
//     fontSize: 34,
//     color: 'black',
//     color: 'black',
//   },
//   text3: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'black',
//     marginLeft: 7,
//   },
//   box1: {
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   box2: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//   },
//   box3: {
//     flex: 0.5,
//     backgroundColor: ' rgba(255, 0, 0, 0.1)',
//     width: '45%',
//     height: 74,
//     marginVertical: 10,
//     marginRight: 15,
//     borderRadius: 12,
//     borderColor: 'rgba(255, 0, 0, 0.1)',
//     borderWidth: 1,
//   },
//   box4: {
//     flex: 0.5,
//     backgroundColor: 'rgba(252, 167, 0, 0.1)',
//     width: '45%',
//     height: 74,
//     marginVertical: 10,
//     borderRadius: 12,
//     borderColor: 'rgba(105, 161, 243, 0.1)',
//     borderWidth: 1,
//   },
//   box5: {
//     flex: 0.5,
//     backgroundColor: '#F4F9FF',
//     width: '45%',
//     height: 74,
//     marginVertical: 10,
//     marginRight: 15,
//     borderRadius: 12,
//     borderColor: 'rgba(252, 167, 0, 0.1)',
//     borderWidth: 1,
//   },
//   box6: {
//     flex: 0.5,
//     backgroundColor: '#EFFFFB',
//     width: '45%',
//     height: 74,
//     marginVertical: 10,
//     borderRadius: 12,
//     borderColor: 'rgba(80, 191, 165, 0.1)',
//     borderWidth: 1,
//   },
//   image3: {
//     height: '115%',
//     width: '18%',
//     marginLeft: 40,
//   },
//   boxIn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   tabsContainer: {
//     height: 45,
//     marginVertical: 10,
//   },
//   tabStyle: {

//     borderRadius: 0,
//     borderColor:'white'
//   },
//   activeTabStyle: {
//     backgroundColor: 'white',
//     borderBottomColor:'black',
//     borderBottomWidth:2
//   },
//   tabTextStyle: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   activeTabTextStyle: {
//     color: 'black',
//   },
// });






import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function App() {
  const [number, onChangeNumber] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        bounces={false}>
        <View style={styles.headerImage}>
          <Image source={Images.img11} style={Images.img}></Image>
        </View>
        <View style={styles.button}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Tip Amount"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.click}>
            <Text style={styles.clickText}>Give Tip</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: '60%',
    width: '70%',
  },
  input: {
    height: 46,
  },
  clickText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  click: {
    marginTop: 20,
    backgroundColor: '#FE4D4D',
    width: '100%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  button: {
    width: '90%',
    borderWidth: 0.7,
    justifyContent: 'center',
    borderRadius: 12,
    marginLeft: 20,
  },
  buttons: {
    width: '90%',
    justifyContent: 'center',

    marginLeft: 20,
  },
});







// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import ToggleSwitch from 'toggle-switch-react-native';

// export default function App() {
//   return (
//     <View style={{backgroundColor: 'white', flex: 1}}>
//       <View style={{flex: 1, backgroundColor: 'white'}}>
//         <View style={styles.view1}>
//           <Text style={styles.text}>Enable Notification</Text>
//         </View>
//         <View style={styles.view}>
//           <Text style={styles.text}>Allow Notification</Text>
//           <ToggleSwitch
//             isOn={true}
//             onColor="#FE4D4D"
//             offColor="black"
//             size="medium"
//             onToggle={isOn => console.log(isOn)}
//           />
//         </View>
//         <View style={styles.view1}>
//           <Text style={styles.text}>Notification Types</Text>
//         </View>
//         <View style={styles.view}>
//           <Text style={styles.text}>Updates & Offerings</Text>
//           <ToggleSwitch
//           isOn={true}
//           onColor="#FE4D4D"
//           offColor="black"
//             size="medium"
//             onToggle={isOn => console.log(isOn)}
//           />
//         </View>
//         <View style={styles.view}>
//           <Text style={styles.text}>Chat Notification</Text>
//           <ToggleSwitch
//           isOn={true}
//           onColor="#FE4D4D"
//           offColor="black"
//             size="medium"
//             onToggle={isOn => console.log(isOn)}
//           />
//         </View>
//         <View style={styles.view}>
//           <Text style={styles.text}>URewards Alerts</Text>
//           <ToggleSwitch
//           isOn={true}
//           onColor="#FE4D4D"
//           offColor="black"
//             size="medium"
//             onToggle={isOn => console.log(isOn)}
//           />
//         </View>
//         <View style={styles.view}>
//           <Text style={styles.text}>Comments Alerts</Text>
//           <ToggleSwitch
//           isOn={true}
//           onColor="#FE4D4D"
//           offColor="black"
//             size="medium"
//             onToggle={isOn => console.log(isOn)}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 23,
//     fontWeight: 500,
//     marginLeft: 20,
//     color: 'black',
//   },
//   view: {
//     backgroundColor: 'white',
//     marginTop: 10,
//     height: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginRight: 20,
//   },
//   view1: {
//     backgroundColor: '#EEEEEE',
//     marginTop: 10,
//     height: 40,
//   },
// });
