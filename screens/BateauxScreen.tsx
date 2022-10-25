import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { RootTabScreenProps } from '../types';
import styles from '../constants/Styles';


export default function BateauxScreen({ navigation }: RootTabScreenProps<'Bateaux'>) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos bateaux partenaires </Text>

      <View style={styles.row}>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/deLaBrise_icon.png')}
    style={styles.icon}
  />
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'De la brise', image: require('../assets/images/photos/deLaBrise.png') })
    // navigation.navigate('Details')
  }><Text style={styles.btnLabel}>De la Brise</Text></Pressable>
</View>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/saphir_icon.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Saphir', image: require('../assets/images/photos/saphir.png') })}>
     <Text style={styles.btnLabel}>Saphir</Text> 
  </Pressable>
</View>

</View>

<View style={styles.row}>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/gastMicher_icon.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Gast Micher', image: require('../assets/images/photos/gastMicher.png') })}>
     <Text style={styles.btnLabel}> Gast Micher</Text>
  </Pressable>
</View>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/aquilon_icon.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Aquilon', image: require('../assets/images/photos/aquilon.png') })}>
     <Text style={styles.btnLabel}>Aquilon</Text> 
  </Pressable>
</View>
</View>

<View style={styles.row}>
{/* CONTACT */}
</View>

</View>
);
}
