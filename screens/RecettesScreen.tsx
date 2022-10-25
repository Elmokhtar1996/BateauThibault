import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import styles from '../constants/Styles';


export default function RestaurantsScreen({ navigation }: RootStackScreenProps<'Restaurants'>) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos recettes </Text>

      <View style={styles.row}>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/homardRecette_icon.png')}
    style={styles.icon}
  />
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Homard', image: require('../assets/images/photos/homardRecette.png') })
  }><Text style={styles.btnLabel}>Homard</Text></Pressable>
</View>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/saintJacques_icon.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'St Jacques', image: require('../assets/images/photos/saintJacques.png') })}>
      <Text style={styles.btnLabel}>St Jacques</Text>
  </Pressable>
</View>

</View>

<View style={styles.row}>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/barRecette_icon.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Bar', image: require('../assets/images/photos/barRecette.png') })}>
      <Text style={styles.btnLabel}>Bar</Text>
  </Pressable>
</View>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/poisson.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Tourteau', image: require('../assets/images/icones/poisson.png') })}>
      <Text style={styles.btnLabel}>Tourteau</Text>
  </Pressable>
</View>
</View>


<View style={styles.row}>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/poisson.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Recette', image: require('../assets/images/icones/poisson.png') })}>
      <Text style={styles.btnLabel}>Recette</Text>
  </Pressable>
</View>

<View style={styles.button}>
  <Image
    source={require('../assets/images/icones/poisson.png')}
    style={styles.icon}/>
  <Pressable onPress={() =>
    navigation.navigate('Details', { title: 'Recette', image: require('../assets/images/icones/poisson.png') })}>
      <Text style={styles.btnLabel}>Recette</Text>
  </Pressable>
</View>
</View>
</View>


);
}
