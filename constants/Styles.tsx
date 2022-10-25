import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ABEBC6'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      position:'absolute',
      top:10,
      color:'black'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    row:{
      flexDirection: 'row',
      width:'100%',
      backgroundColor:''
    },
    list:{
      flexDirection: 'row',
      width:'70%',
      backgroundColor:'#ABEBC6',
      alignItems:'center'
    },
    listItem:{
      flexDirection: 'row',
      width:'100%',
      fontSize:25,
      color:'white',
      
      borderBottomColor:'white'
    },
    image: {
      position: 'relative',
      height: 250,
      width: 250,
  
    },
    
    icon: {
      position: 'relative',
      height: 50,
      width: 50,
  
    },
    logo:{
      width:250,
      height:250,
    },
    button: {

    borderRadius:5,
    padding:5,
    marginLeft:5,
    marginTop:5,
    width:'48%',
    backgroundColor:'#27AE60',

    },
    
    btnLabel:{
      fontSize: 20,
      flexGrow: 1,
      flex: 1,
    },
    header:{
      backgroundColor:'#DAF7A6',
      position:'absolute',
      top:100,
      color:'black',
      marginBottom:100,
   
    },
    headerText:{
      color:'black',
      fontSize:15,
      marginBottom:10,
    }
   
  
   
  });
    