import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from '../constants/Styles';


export default function ProductsScreen({ navigation }: RootTabScreenProps<'Products'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez vos produits</Text>






      <View style={styles.button}>
        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
        <Pressable onPress={() =>
          navigation.navigate('ProductList', { category: 0 })
        }><Text style={styles.btnLabel}>Poissons</Text></Pressable>
      </View>





      <View style={styles.button}>
        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
        <Pressable onPress={() =>
          navigation.navigate('ProductList', { category: 1 })
        }><Text style={styles.btnLabel}>Coquillages</Text></Pressable>
      </View>





      <View style={styles.button}>
        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
        <Pressable onPress={() =>
          navigation.navigate('ProductList', { category: 2 })
        }><Text style={styles.btnLabel}>Crustacés</Text></Pressable>
      </View>





      <View style={styles.button}>
        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
        <Pressable onPress={() =>
          navigation.navigate('ProductList')
        }><Text style={styles.btnLabel}>Promos</Text></Pressable>
      </View>







    </View>
  );
}
