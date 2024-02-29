import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import credit from './data/credit';
import AxiosInstance from './data/AxiosInstance';
import {Appcontext} from './Appcontext';
const Payment = props => {
  const {navigation} = props;
  const {cart, setCart} = useContext(Appcontext);
  const {account, setAccount} = useContext(Appcontext);
  const [datacredit, dataCredit] = useState(credit);
  const [selectedindex, setselectedIndex] = useState(1);
  const gotosetting = () => {
    navigation.navigate('Card');
  };
  const total = cart.reduce((total, item) => {
    return total + item.product_price * item.product_quantity;
  }, 0);

const checkout = () => {
  if (!cart || cart.length === 0) {
    Alert.alert('Không có sản phẩm trong giỏ hàng');
    return;
  }
  checkout2();
};
  const checkout2 = async () => {
    try {
      const body = {
        email: account.user.email,
        carts: cart,
      };
      const response = await AxiosInstance().post('/carts', body);
      if (response.status == true) {
        Alert.alert('Thanh toán thành công');
        setCart([]);
        navigation.navigate('Home');
      } else {
        Alert.alert('Thanh toán thất bại');
      }
    } catch (error) {
      console.log(`Payment báo lỗi ${error}`);
    }
  };
  const rendercredit = ({item}) => {
    const {id, name, img, payprice} = item;
    return (
      <TouchableOpacity onPress={() => setselectedIndex(id)}>
        <LinearGradient
          colors={['#262B33', 'rgba(38, 43, 51, 0.00)']}
          style={mystyle.gradient2}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Image style={mystyle.imgcredit} source={img} />
          <Text style={mystyle.txtinfocre}>{name}</Text>
          <View style={mystyle.priceContainer}>
            <Text style={mystyle.price}>{payprice}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <View style={mystyle.body}>
      <View style={mystyle.gr90}>
        <TouchableOpacity onPress={gotosetting}>
          <View style={mystyle.gr3}>
            <Image
              source={require('../assets/img/arrowleft.png')}
              style={[mystyle.Rectangle_1]}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 36,
            marginLeft: 110,
          }}>
          Payment
        </Text>
      </View>

      <View style={mystyle.selectcard}>
        <Text style={mystyle.txtcredit}>Credit Card</Text>
        <LinearGradient
          colors={['#262B33', 'rgba(38, 43, 51, 0.00)']}
          style={mystyle.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={mystyle.chipvisa}>
            <Image
              style={{width: 31, height: 24}}
              source={require('../assets/img/chip.png')}
            />
            <Image
              style={{width: 50, height: 16}}
              source={require('../assets/img/visa.png')}
            />
          </View>
          <Text style={mystyle.number}>3897 8923 6745 4638</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 33,
            }}>
            <View>
              <Text style={mystyle.txtnameex}>Card Holder Name</Text>
              <Text style={[mystyle.nameexdata, {fontSize: 16}]}>
                Robert Evans
              </Text>
            </View>
            <View>
              <Text style={mystyle.txtnameex}>Expiry Date</Text>
              <Text style={[mystyle.nameexdata, {fontSize: 14}]}>02/30</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <FlatList
        data={datacredit}
        renderItem={rendercredit}
        keyExtractor={item => item.id}
      />
      <View style={mystyle.tobal}>
        <View style={{justifyContent: 'center'}}>
          <Text style={mystyle.txtprice}>Tobal price</Text>
          <Text style={[mystyle.txtsize, {color: '#D17842'}]}>
            $<Text style={[mystyle.txtsize, {color: 'white'}]}> {total}</Text>
          </Text>
        </View>
        <TouchableOpacity style={mystyle.btnpay} onPress={checkout}>
          <Text style={mystyle.txtsize}>Pay from Credit Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
const mystyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0C0F14',
    padding: 20,
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
  txtsize: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 17,
    marginRight: 17,
  },
  btnpay: {
    width: 240,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#D17842',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  price: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginRight: 19,
  },
  txtinfocre: {
    marginLeft: 14,
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  imgcredit: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  txtnameex: {
    color: 'white',
    opacity: 0.5,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  nameexdata: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  number: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 7,
    marginTop: 34,
  },
  chipvisa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  gradient: {
    width: 320,
    height: 186,
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
  },
  gradient2: {
    width: 350,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#262B33',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtcredit: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'nomal',
    fontWeight: '600',
    lineHeight: 20,
  },
  selectcard: {
    padding: 12,
    width: 350,
    height: 241,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#D17842',
  },
  gr90: {
    marginTop: 20.9,
    flexDirection: 'row',
    flexShrink: 1,
    paddingBottom: 10,
  },
  intersect: {
    width: 30,
    height: 30,
    borderRadius: 6,
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
