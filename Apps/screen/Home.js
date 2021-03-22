import React from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet,View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
    {
      id: "1",
      title: "C",
      year:"",
      logo:require('../assets/images/user1.png'),
    },
    {
      id: "2",
      title: "C++",
      logo:require('../assets/images/user1.png'),

    },
    {
      id: "3",
      title: "Java",
      logo:require('../assets/images/user1.png'),

    },
    {
      id: "4",
      title: "JavaScript",
      logo:require('../assets/images/user1.png'),
    },
    {
      id: "5",
      title: "Python",
      logo:require('../assets/images/user1.png'),

    },
    
  ];

const Item = ({ item,onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.detailList}>
    <Image source={item.logo} style={styles.imgStyle}/>
    <Text style={styles.title}>{item.title}</Text>
    <Icon name='chevron-right' size={40} style={styles.rightIcon}/>
    </View>
   
  </TouchableOpacity>
);

export class Home extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
         selectedId:''
        };
      }
  
    //   componentDidMount(){
    //     console.log("registered_data from auth did mount:",registered_data);

    //   async()=>{
    //   let registered_data = await AsyncStorage.getItem('registered_data');
    //   let parsed = JSON.parse(registered_data);
  
    // console.log("email:",parsed.email,"--password:",parsed.password);}
    
    //   }
    render(props){
    // console.log("email:",parsed.email,"--password:",parsed.password);
      
  
        // const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === this.selectedId ? "#edffec" : "#f9f3f3";

    return (
      <Item
        item={item}
        onPress={ ()=>this.props.navigation.navigate('Detailed')}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={this.selectedId}
      />
      <View>
        
      </View>
    </SafeAreaView>
  );}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    // borderWidth:1,
    borderColor:'#00587a',
    marginHorizontal: 16,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
   
  },
  title: {
    fontSize: 32,
    marginLeft:30,
    marginTop:20
  },
  detailList:{
      flexDirection:'row',
     
  },
  imgStyle:{
      height:80,
      width:80,
  },
  rightIcon:{marginTop:23,position:'absolute',right:0}
});

export default Home;