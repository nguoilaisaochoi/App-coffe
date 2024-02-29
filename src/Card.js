import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import card2data from './data/card2data';
import {Appcontext} from './Appcontext';
import AxiosInstance from './data/AxiosInstance';
const Card = props => {
  const {navigation} = props;
  const {cart, setCart} = useContext(Appcontext);
  const gotosetting = () => {
    navigation.navigate('Setting');
  };
  const gotopayment = () => {
    navigation.navigate('Payment');
  };
  const gotoperson = () => {
    navigation.navigate('Person');
  };

  const total = cart.reduce((total, item) => {
    return total + item.product_price * item.product_quantity;
  }, 0);
  const rendercard_2 = ({item}) => {
    const {
      product_id,
      product_name,
      product_image,
      product_quantity,
      product_price,
    } = item;


    const onChangeQuantity = type => {
      // type: 1 tăng, -1 giảm
      const quantity = item.product_quantity + type;
      // tìm index của item trong giỏ hàng
      const index = cart.findIndex(
        cartItem =>
          cartItem.product_id.toString() == item.product_id.toString(),
      );
      // nếu số lượng = 0 thì xóa item khỏi giỏ hàng
      if (quantity == 0) {
        Alert.alert('Xoá sản phẩm', 'Muốn xoá sản phẩm này', [
          {
            text: 'Không',
            style: 'cancel',
          },
          {
            text: 'Có',
            onPress: () => {
              cart.splice(index, 1);
              setCart([...cart]);
            },
          },
        ]);
        return;
      }
      // tạo giỏ hàng mới
      cart[index].product_quantity = quantity;
      // set giỏ hàng mới
      setCart([...cart]);
    };
    return (
      <LinearGradient
        colors={['#262B33', 'rgba(38, 43, 51, 0.00)']}
        style={mystyle.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.2}}>
        <View style={{flexDirection: 'row'}}>
          <Image style={mystyle.img_2} source={{uri: product_image}} />
          <View style={{marginLeft: 21}}>
            <Text style={mystyle.name}>{product_name}</Text>
            <Text style={mystyle.type}>With Steamed Milk</Text>
            <View style={mystyle.btnsize2}>
              <View style={mystyle.size}>
                <Text style={mystyle.txtsize}>S</Text>
              </View>
              <Text style={[mystyle.txtsize, {color: '#D17842'}]}>
                $
                <Text style={[mystyle.txtsize, {color: 'white'}]}>
                  {product_price}
                </Text>
              </Text>
            </View>
            <View style={mystyle.btnsize2}>
              <TouchableOpacity
                style={mystyle.btnsize}
                onPress={() => onChangeQuantity(-1)}>
                <Text style={mystyle.txtbtnsize}>-</Text>
              </TouchableOpacity>
              <View style={mystyle.btnnum}>
                <Text style={mystyle.txtbtnsize}>{product_quantity}</Text>
              </View>
              <TouchableOpacity
                style={mystyle.btnsize}
                onPress={() => onChangeQuantity(1)}>
                <Text style={mystyle.txtbtnsize}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
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
          Card
        </Text>
        <TouchableOpacity onPress={gotoperson}>
          <Image
            source={require('../assets/img/Intersect.png')}
            style={mystyle.intersect}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        renderItem={rendercard_2}
        keyExtractor={item => item.id}
      />
      <View style={mystyle.tobal}>
        <View style={{justifyContent: 'center'}}>
          <Text style={mystyle.txtprice}>Tobal price</Text>
          <Text style={[mystyle.txtsize, {color: '#D17842'}]}>
            $<Text style={[mystyle.txtsize, {color: 'white'}]}> {total}</Text>
          </Text>
        </View>
        <TouchableOpacity style={mystyle.btnpay} onPress={gotopayment}>
          <Text style={mystyle.txtsize}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
const mystyle = StyleSheet.create({
  body: {flex: 1, backgroundColor: '#0C0F14', padding: 20},
  gradient: {flexShrink: 1, minHeight: 154, borderRadius: 23, marginBottom: 16},
  img: {width: 107, height: 107, borderRadius: 16, margin: 10},
  img_2: {width: 126, height: 126, borderRadius: 16, margin: 10},
  txtbeansize: {
    color: '#AEAEAE',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  tobal: {
    paddingTop: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtprice: {
    color: '#AEAEAE',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 15,
  },
  btnsize2_2: {
    width: 72,
    height: 35,
  },
  btnpay: {
    width: 240,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#D17842',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsize2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  selectsize: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnnum: {
    width: 50,
    height: 30,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#D17842',
    backgroundColor: '#0C0F14',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 17,
    marginRight: 17,
  },

  btnsize: {
    width: 28,
    height: 28,
    backgroundColor: '#D17842',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtsize: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 17,
    marginRight: 17,
  },
  txtbtnsize: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  size: {
    width: 72,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#0C0F14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txttype2: {
    color: '#AEAEAE',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  btntype2: {
    width: 148,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#141921',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  type: {
    fontSize: 10,
    color: '#AEAEAE',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  name: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: 'white',
    marginTop: 12,

    maxWidth:'74%'
  },
  gr90: {
    marginTop: 20.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
    paddingBottom: 10,
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
