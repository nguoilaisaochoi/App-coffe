import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Favdata from './data/Favdata';
import {Appcontext} from './Appcontext';
const Fav = props => {
  const {navigation} = props;
  const [datafav, dataFav] = useState(Favdata);
  const {favoriteProducts, setFavoriteProducts} = useContext(Appcontext);

  const gotosetting = () => {
    navigation.navigate('Setting');
  };
  const gotoperson = () => {
    navigation.navigate('Person');
  };

  const renderfav = ({item}) => {
    const {_id, name, image, rating, description, voting} = item;

    const removefav = () => {
      const index = favoriteProducts.findIndex(item => item._id.toString());
      const newFavoriteProducts = [...favoriteProducts];
      newFavoriteProducts.splice(index, 1);
      setFavoriteProducts(newFavoriteProducts);
    };
    return (
      <View style={mystyle.item}>
        <Image source={{uri: image}} style={mystyle.image} />
        <TouchableOpacity style={mystyle.heart} onPress={removefav}>
          <Image
            source={require('../assets/img/heartbtn.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <View style={mystyle.container2}>
          <View style={mystyle.content1}>
            <View style={mystyle.content1_1}>
              <Text style={mystyle.txtname}>{name}</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#AEAEAE',
                  fontWeight: '400',
                  marginTop: '2%',
                }}>
                With Steamed Milk
              </Text>
            </View>
            <View style={mystyle.beans}>
              <Image
                source={require('../assets/img/Group_19.png')}
                style={{width: 31, height: 31}}
              />
              <Text style={{color: 'white', fontSize: 10}}>Coffe</Text>
            </View>
            <View style={mystyle.beans}>
              <Image
                source={require('../assets/img/drop.png')}
                style={{width: 29, height: 29}}
              />
              <Text style={{color: 'white', fontSize: 10}}>Milk</Text>
            </View>
          </View>
          <View style={mystyle.content2}>
            <View style={mystyle.txtcontent2}>
              <Image
                source={require('../assets/img/star.png')}
                style={{width: 22, height: 22}}
              />
              <Text style={mystyle.txtcontent2_1}>{rating}</Text>
              <Text style={mystyle.txtcontent2_2}>{voting}</Text>
            </View>
            <TouchableOpacity style={mystyle.btnconent2}>
              <Text style={{fontSize: 10, fontWeight: '500', color: '#AEAEAE'}}>
                Medium Roasted
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient
          colors={['#262B33', 'rgba(38, 43, 51, 0.00)']}
          style={mystyle.gradient}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.2}}>
          <Text style={mystyle.txtdescrip}>Description</Text>
          <Text style={mystyle.txtconent}>{description}</Text>
        </LinearGradient>
      </View>
    );
  };
  return (
    <View style={mystyle.body}>
      <View style={mystyle.gr90}>
        <TouchableOpacity onPress={gotosetting}>
          <View style={mystyle.gr3}>
            <Image
              source={require('../assets/img/Rectangle_1.png')}
              style={[mystyle.Rectangle_1]}
            />
            <Image
              source={require('../assets/img/element_3.png')}
              style={mystyle.element3}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 36,
          }}>
          Favorites
        </Text>
        <TouchableOpacity onPress={gotoperson}>
          <Image
            source={require('../assets/img/Intersect.png')}
            style={mystyle.intersect}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={favoriteProducts}
        renderItem={renderfav}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Fav;
const mystyle = StyleSheet.create({
  body: {flex: 1, backgroundColor: '#0C0F14', padding: 20},
  gradient: {
    flexShrink: 1,
    maxHeight: 118,
    padding: 18,
    zIndex: 1,
    overflow: 'hidden',
  },
  heart: {
    position: 'absolute',
    margin: 20,
    right: 0,
  },
  txtname: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginTop: 20,
    height: 50,
  },
  txtconent: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  txtdescrip: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  item: {
    width: 350,
    maxHeight: 641,
    borderRadius: 25,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 434,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  gr90: {
    marginTop: 20.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
    paddingBottom: 10,
  },
  content1_1: {width: '50%', marginLeft: 20, justifyContent: 'center'},
  beans: {
    marginRight: 20,
    width: 56,
    height: 56,
    backgroundColor: '#141921',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  content2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexShrink: 1,
    height: '43%',
    marginTop: 18,
    alignItems: 'center',
    marginRight: 10,
  },
  txtcontent2_1: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: 5,
  },
  txtcontent2_2: {
    fontSize: 10,
    fontWeight: '400',
    color: '#AEAEAE',
    marginLeft: 5,
  },
  btnconent2: {
    width: 131,
    height: 44,
    backgroundColor: '#141921',
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtcontent2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  content1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexShrink: 1,
    height: '43%',
    paddingTop: 18,
  },
  container2: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    flexGrow: 1,
    paddingBottom: '30%',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
  },
  Rectangle_1: {
    flexShrink: 1,
    resizeMode: 'contain',
  },
  gr3: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  element3: {
    position: 'absolute',
    width: 14,
    height: 14,
  },
  intersect: {
    width: 30,
    height: 30,
    borderRadius: 6,
  },
});
