import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  VirtualizedList,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import datadeans from './data/Databeans.js';
import gr7data from './data/g7data.js';
import sp from './data/sp.js';
import AxiosInstance from './data/AxiosInstance';
import {Appcontext} from './Appcontext.js';
const Homescreen = props => {
  const {navigation} = props;
  const {id, set_ID} = useContext(Appcontext);
  const gotocoffedetail = _id => {
    set_ID(_id), navigation.navigate('Coffe');
  };
  const gotobeansdetail = () => {
    navigation.navigate('Beans');
  };
  const gotosetting = () => {
    navigation.navigate('Setting');
  };
  const gotoperson = () => {
    navigation.navigate('Person');
  };

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedindex, setselectedIndex] = useState(
    '65b07ddcfc13ae4836b4cb0f',
  );
  const [databean, dataBean] = useState(datadeans);
  const [products, setProducts] = useState([]);

  //lay danh muc sp tu api
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance().get('/categories');
        setCategories(response.categories);
        // cho danh mục đầu tiên được chọn
        setSelectedCategory(response.categories[0]._id);
      } catch (error) {
        console.log(`Homescreen báo lỗi 2 ${error}`);
      }
    };
    getCategories();
  }, []);
//lay sp tu api
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!selectedCategory) {
          return;
        }
        const response = await AxiosInstance().get(
          `/products?category=${selectedCategory}`,
        );
        setProducts(response.products);
      } catch (error) {
        console.log(`Homescreen báo lỗi $ 3{error}`);
      }
    };
    getProducts();
  }, [selectedCategory]);

  //hien sp theo danh muc da
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!selectedCategory) {
          return;
        }
        const response = await AxiosInstance().get(
          `/products?category=${selectedCategory}`,
        );
        setProducts(response.products);
      } catch (error) {
        console.log(`Homescreen báo lỗi 1 ${error}`);
      }
    };
    getProducts();
  }, [selectedCategory]);

  const renderitem = ({item}) => {
    const {_id, name} = item;
    return (
      <View style={mystyle.gr7menu}>
        <Text
          style={[
            {color: _id == selectedindex ? '#D17842' : '#52555A'},
            mystyle.gr7name,
          ]}
          onPress={() => {
            setselectedIndex(_id);
            setSelectedCategory(_id);
          }}>
          {name}
        </Text>
        {_id === selectedindex && <View style={mystyle.react3}></View>}
      </View>
    );
  };

  const rendersp = ({item}) => {
    const {_id, name, content, price, rating, image} = item;
    return (
      <TouchableOpacity onPress={() => gotocoffedetail(_id)}>
        <LinearGradient
          colors={['#262B33', 'rgba(38, 43, 51, 0.00)']}
          style={mystyle.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Image source={{uri: image}} style={mystyle.imgsp}></Image>
          <View style={mystyle.ratestyle}>
            <View style={mystyle.itemlist}>
              <Image
                source={require('../assets/img/star.png')}
                style={mystyle.star}
              />
              <Text style={mystyle.rate}>{rating}.0</Text>
            </View>
          </View>
          <View style={{flexGrow: 1}}>
            <Text style={[mystyle.txtname2, {fontSize: 13}]}>{name}</Text>
            {/*<Text style={[mystyle.txtname, {fontSize: 9}]}>{content}</Text>*/}
          </View>
          <View style={mystyle.price}>
            <Text style={mystyle.txtprice}>
              <Text style={{color: '#D17842'}}>$ </Text>
              {price}.0
            </Text>
            <TouchableOpacity style={mystyle.buttonadd}>
              <Text style={mystyle.txtadd}>+</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const renderbeans = ({item}) => {
    const {id, name, content, price, rate, img} = item;
    return (
      <TouchableOpacity onPress={gotobeansdetail}>
        <LinearGradient
          colors={['#262B33', 'rgba(38, 43, 51, 0.00)']}
          style={[mystyle.gradient, {marginBottom: 80}]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Image source={img} style={mystyle.imgsp}></Image>
          <Text style={[mystyle.txtname, {fontSize: 13}]}>{name}</Text>
          <Text style={[mystyle.txtname, {fontSize: 9}]} t>
            {content}
          </Text>
          <View style={mystyle.price}>
            <Text style={mystyle.txtprice}>
              <Text style={{color: '#D17842'}}>$ </Text>
              {price}
            </Text>
            <TouchableOpacity style={mystyle.buttonadd}>
              <Text style={mystyle.txtadd}>+</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  {
    /*body */
  }
  return (
    <View style={mystyle.head}>
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

        <TouchableOpacity onPress={gotoperson}>
          <Image
            source={require('../assets/img/Intersect.png')}
            style={mystyle.intersect}
          />
        </TouchableOpacity>
      </View>
      <Text style={mystyle.find}>Find the best coffee for you</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={mystyle.gr4}>
          <View style={mystyle.rect2}>
            <Image
              source={require('../assets/img/search_normal.png')}
              style={mystyle.search_normal}></Image>

            <TextInput
              style={mystyle.input1}
              placeholder="Find Your Coffee..."
              placeholderTextColor="#52555A"
            />
          </View>
        </View>

        <VirtualizedList
          horizontal={true}
          data={categories}
          renderItem={renderitem}
          getItemCount={() => categories.length}
          keyExtractor={item => item.id}
          getItem={(data, index) => data[index]}
        />
      </KeyboardAvoidingView>
      <ScrollView>
        <View style={mystyle.gr6}>
          <VirtualizedList
            horizontal={true}
            data={products}
            renderItem={rendersp}
            getItemCount={() => products.length}
            keyExtractor={item => item.id}
            getItem={(data, index) => data[index]}
          />
        </View>
        <Text style={mystyle.txtbean}>Coffee beans</Text>
        <FlatList
          horizontal={true}
          data={databean}
          renderItem={renderbeans}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default Homescreen;

const mystyle = StyleSheet.create({
  head: {
    padding: 10,
    flex: 1,
    backgroundColor: '#0C0F14',
  },
  imgbtnmenu: {
    width: 34,
    height: 34,
    marginLeft: 10,
    marginRight: 10,
  },
  react10: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 55,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 10,
  },
  txtbean: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    margin: 23.2,
  },
  gradient: {
    borderRadius: 23,
    overflow: 'hidden',
    padding: 10,
    marginTop: 19,
    marginLeft: 10,
    width: 149,
    height: 246.679,
  },
  txtadd: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  buttonadd: {
    width: 28,
    height: 28,
    backgroundColor: '#D17842',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtprice: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  price: {
    marginTop: 6.3,
    flexDirection: 'row',
    flexShrink: 1,
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  txtname: {
    marginTop: 3.75,
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    maxHeight: 50,
  },
  txtname2: {
    marginTop: 3.75,
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    minHeight: 50,
    maxHeight: 51,
  },
  itemlist: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    color: 'white',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    alignSelf: 'center',
    marginLeft: 4,
  },
  star: {
    width: 10,
    height: 10,
  },
  ratestyle: {
    margin: 10,
    position: 'absolute',
    right: -4,
    width: 53,
    height: 22,
    borderTopEndRadius: 26,
    borderBottomStartRadius: 26,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
  },
  imgsp: {
    width: 134,
    height: 134,
    borderRadius: 26,
  },
  gr6: {
    flexGrow: 0,
  },
  react3: {
    width: 8,
    height: 8,
    backgroundColor: '#D17842',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 6,
  },
  gr7menu: {
    height: 45,
    marginTop: 25,
  },
  gr7name: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    marginRight: 19,
    marginLeft: 19,
  },
  input1: {
    color: 'white',
    flex: 1,
    marginLeft: 19,
  },
  search_normal: {
    width: 22,
    height: 22,
  },
  rect2: {
    marginLeft: 18,
    marginRight: 18,
    flexShrink: 1,
    height: 42,
    backgroundColor: '#141921',
    paddingLeft: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
  },
  gr4: {
    justifyContent: 'center',
    marginTop: 28,
    flexShrink: 1,
    height: 55,
  },
  find: {
    marginTop: 31,
    width: 195,
    height: 72,
    color: 'white',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 36,
  },
  intersect: {
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  gr90: {
    marginTop: 20.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
    padding: 10,
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
});
