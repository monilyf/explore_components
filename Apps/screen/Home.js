import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: '1',
    title: 'C',
    primaryText:'',

    logo: require('../assets/images/c.png'),
  },
  {
    id: '2',
    title: 'C++',
    logo: require('../assets/images/c++.png'),
  },
  {
    id: '3',
    title: 'Java',
    logo: require('../assets/images/java.png'),
  },
  {
    id: '4',
    title: 'JavaScript',
    logo: require('../assets/images/js.png'),
  },
  // {
  //   id: '5',
  //   title: 'Python',
  //   logo: require('../assets/images/user1.png'),
  // },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.detailList}>
      <Image source={item.logo} style={styles.imgStyle} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.primaryText}>{item.primaryText}</Text>
      <Icon name="chevron-right" size={40} style={styles.rightIcon} />
    </View>
  </TouchableOpacity>
);

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: '',
    };
  }



  render(props) {
    return (
      <SafeAreaView style={styles.container}>
      
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              item={item}
              onPress={() => this.props.navigation.navigate('Detailed')}
            />
          )}
          keyExtractor={(item) => item.id}
          // extraData={this.selectedId}
        />
        <View></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius:7,
    borderColor: '#edffec',
    marginHorizontal: 16,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
    // marginTop: 20,
  },
  detailList: {
    flexDirection: 'row',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  rightIcon: {marginTop: 8, position: 'absolute', right: 0},
});

export default Home;
