import React from 'react';
import { Pressable, StyleSheet, Image, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from '../constants/Styles';

const image = { uri: "../assets/images/background" };
export default function HomePage({ navigation }: RootTabScreenProps<'Homepage'>) {
 
 
  return (
    <View style={styles.container}>
       <Image style={styles.logo}
          source={require('../assets/images/logo1.png')}
          
        />
      <Text style={styles.title}>Le bateau de Thibault</Text>
      <View style={styles.header}>

</View>
      





  <View>
</View>

<View style={styles.row}>


      <View style={styles.button}>
      <Image
          source={require('../assets/images/icones/ancre.png')}
          style={styles.icon}
        />
        <Pressable     onPress={() =>
        navigation.navigate('Bateaux')
      }><Text style={styles.btnLabel}>Bateaux</Text></Pressable>
 
            
       </View>

      <View style={styles.button}>
      <Image
          source={require('../assets/images/icones/restaurant.png')}
    style={styles.icon}/>
        <Pressable onPress={() =>
        navigation.navigate('Restaurants')
      }><Text style={styles.btnLabel}>Restaurants</Text></Pressable>
          </View>
</View>


<View style={styles.row}>


      <View style={styles.button}>
        <Image
          source={require('../assets/images/icones/recette.png')}
    style={styles.icon}/>
            <Pressable onPress={() =>
              navigation.navigate('Recettes') }>
              <Text style={styles.btnLabel}>Recettes</Text>  
            </Pressable>
       </View>

      <View style={styles.button}>
      <Image
          source={require('../assets/images/icones/poisson.png')}
    style={styles.icon}/>
        <Pressable     onPress={() =>
        navigation.navigate('Products')
      }><Text style={styles.btnLabel}>Produits</Text></Pressable>
          </View>
</View>



    </View>
  );
}
