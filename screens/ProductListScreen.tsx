import React, { useState } from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from '../constants/Styles';


export default function ProductListScreen({ navigation, route, dispatch }: RootTabScreenProps<'ProductList'>) {


var data = [{
    "id": 12,
    "name": "Aile de raie",
    "category": 0,
    "price": 10.0,
    "unit": "kg",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "Pêche à la corde",
    "owner": "tig"
},
{
    "id": 9,
    "name": "Araignées",
    "category": 2,
    "price": 7.0,
    "unit": "kg",
    "availability": false,
    "sale": false,
    "discount": 0.0,
    "comments": "Hors saison,  pêche aux casiers",
    "owner": "tig"
},
{
    "id": 3,
    "name": "Bar de ligne",
    "category": 0,
    "price": 30.0,
    "unit": "kg",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "Plus de 1.5kg le poisson",
    "owner": "tig"
},
{
    "id": 2,
    "name": "Bar de ligne portion",
    "category": 0,
    "price": 10.0,
    "unit": "pièce",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "Environ 550-700g la pièce",
    "owner": "tig"
},
{
    "id": 10,
    "name": "Bouquets cuits",
    "category": 1,
    "price": 8.0,
    "unit": "100g",
    "availability": false,
    "sale": false,
    "discount": 0.0,
    "comments": "Hors saison, pêche à l'épuisette",
    "owner": "tig"
},
{
    "id": 1,
    "name": "Filet Bar de ligne",
    "category": 0,
    "price": 7.0,
    "unit": "2 filets",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "environ 300g",
    "owner": "tig"
},
{
    "id": 5,
    "name": "Filet Julienne",
    "category": 0,
    "price": 19.0,
    "unit": "kg",
    "availability": false,
    "sale": false,
    "discount": 0.0,
    "comments": "Pêche à la corde",
    "owner": "tig"
},
{
    "id": 7,
    "name": "Huitres N°2 St Vaast",
    "category": 1,
    "price": 9.5,
    "unit": "Dz",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "",
    "owner": "tig"
},
{
    "id": 8,
    "name": "Huitres N°2 St Vaast",
    "category": 1,
    "price": 38.0,
    "unit": "4 Dz",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "",
    "owner": "tig"
},
{
    "id": 13,
    "name": "Huîtres N°2 OR St Vaast",
    "category": 1,
    "price": 12.0,
    "unit": "Dz",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "Médaille d'or Salon Agriculture",
    "owner": "tig"
},
{
    "id": 14,
    "name": "Huîtres N°2 OR St Vaast",
    "category": 1,
    "price": 24.0,
    "unit": "2 Dz",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "Médaille d'or salon agriculture",
    "owner": "tig"
},
{
    "id": 15,
    "name": "Huîtres N°2 OR St Vaast",
    "category": 1,
    "price": 48.0,
    "unit": "4 Dz",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "Médaille d'or salon agriculture",
    "owner": "tig"
},
{
    "id": 16,
    "name": "Huîtres N°2 St Vaast",
    "category": 1,
    "price": 19.0,
    "unit": "2 Dz",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "",
    "owner": "tig"
},
{
    "id": 4,
    "name": "Lieu jaune de ligne",
    "category": 0,
    "price": 12.0,
    "unit": "kg",
    "availability": true,
    "sale": true,
    "discount": 0.0,
    "comments": "Environ 550-700g la portion",
    "owner": "tig"
},
{
    "id": 6,
    "name": "Moules de pêche",
    "category": 1,
    "price": 7.0,
    "unit": "kg",
    "availability": true,
    "sale": true,
    "discount": 5.0,
    "comments": "",
    "owner": "tig"
}]

let [cart, setCart] = useState([]);


function addToCart(id) {
setCart([...cart, id]);
// dispatch({type:"ADD_TO_CART", payload: item})
console.log(cart);

}
// function removeFromCart(id) {
//     setCart([...cart, id])
// }


if(route.params){  
  data = data.filter(function(item){
    return item.category == route.params.category ;
  });
} else {
  data = data.filter(function(item){
  return item.sale == true;
});
}


console.log(data);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez vos produits</Text>


      {data.map((item) => (
          <View style={styles.list}>
            <Text style={styles.listItem}>{item.name}</Text>
            <button onClick={() => addToCart(item.id)}>+</button>
            
            <button >0</button>   
        <button >-</button>
        {/* <button onClick={() => removeFromCart(item.id)}>-</button> */}
          </View>
        ))}
  





    </View>
  );
}
