import React from "react";
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import navigation from "../navigation";

const App = () => (
  <AppBar
    variant="bottom"
    color="white"
    tintColor="#82E0AA"

    leading={props => (
      <IconButton icon={props => <Icon name="home" {...props} />} {...props} />
    )}
    trailing={props => (
      <IconButton
        icon={props => <Icon name="shopping"  {...props} />}
        {...props}
      />
    )}
    style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
  >
    
    
    <FAB  
      icon={props => <Icon name="account" {...props} onPress={() => {
        navigation.navigate('Products')
       }} />}
      style={{ position: "absolute", top: -28, alignSelf: "center" }}
    />
  </AppBar>
);

export default App;