import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  VirtualizedList,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import sp from './data/sp';
import {Appcontext} from './Appcontext';
import AxiosInstance from './data/AxiosInstance';

const His = props => {
  const {navigation} = props;
  const {
    his,
    setHis,
    account,
    setAccount,
    cart,
    setCart,
    userdata,
    setUserdata,
  } = useContext(Appcontext);

  const gotosetting = () => {
    navigation.navigate('Setting');
  };
  const gotoperson = () => {
    navigation.navigate('Person');
  };

  //tinh tong tien o renderhis
  const calculateTotalAmount = products => {
    return products.reduce((total, product) => {
      return total + product.product_price * product.product_quantity;
    }, 0);
  };

  useEffect(() => { 
    const check = async () => {
      try {
        const body = {
          email: userdata.Name,
          password: userdata.password,
        };
        const response = await AxiosInstance().post('/users/login', body);
        setAccount(response);
        console.log(`His báo account rest thanh cong`);
      } catch (error) {
        console.log(`his báo lỗi ${error}`);
      }
    };
    check();
  }, [cart, userdata]);

  useEffect(() => {
    const getCategories = async () => {
      setHis(account.user.carts);
    };
    getCategories();
  }, [account]);

  const renderhisitem = ({item}) => {
    const {
      product_id,
      product_name,
      product_image,
      product_price,
      product_quantity,
    } = item;
    const total = product_price * product_quantity;
    return (
      <LinearGradient
        colors={['#262B33', 'rgba(38, 43, 51, 0.00)']}
        style={mystyle.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.2}}>
        <View style={mystyle.item}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 57, height: 57}}
              source={{uri: product_image}}
            />
            <View style={mystyle.namehisitem}>
              <Text style={[mystyle.txtitem1, {fontSize: 16}]}>
                {product_name}
              </Text>
            </View>
          </View>
          <Text style={mystyle.txtitem2}>
            $<Text style={mystyle.txtitem3}> {product_price}.0</Text>
          </Text>
        </View>
        <View style={mystyle.sizeitem}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                mystyle.itemsize,
                {
                  width: 84,
                  borderTopStartRadius: 10,
                  borderBottomLeftRadius: 10,
                },
              ]}>
              <Text style={[mystyle.txtitem3, {fontSize: 16}]}>S</Text>
            </View>
            <View
              style={[
                mystyle.itemsize,
                {
                  width: 84,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                },
              ]}>
              <Text style={[mystyle.txtitem2, {fontSize: 16}]}>
                $
                <Text style={[mystyle.txtitem3, {fontSize: 16}]}>
                  {product_price}.0
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={mystyle.txtitem2}>
              X<Text style={mystyle.txtitem3}>{product_quantity}</Text>
            </Text>
          </View>
          <Text style={mystyle.txtitem2}>{total}.0</Text>
        </View>
      </LinearGradient>
    );
  };
  const renderhis = ({item}) => {
    const {products, created_at} = item;
    const totalAmount = calculateTotalAmount(products);
    return (
      <View>
        <View style={mystyle.time}>
          <View>
            <Text style={mystyle.txttime1}>Order Date</Text>
            <Text style={[mystyle.txttime2, {color: 'white'}]}>
              {created_at}
            </Text>
          </View>
          <View>
            <Text style={mystyle.txttime1}>Total Amount</Text>
            <Text style={[mystyle.txttime2, {color: '#D17842'}]}>
              $ {totalAmount}.0
            </Text>
          </View>
        </View>
        <VirtualizedList
          data={products}
          renderItem={renderhisitem}
          getItemCount={() => products.length}
          keyExtractor={item => item.id}
          getItem={(data, index) => data[index]}
        />
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
          Order History
        </Text>
        <TouchableOpacity onPress={gotoperson}>
          <Image
            source={require('../assets/img/Intersect.png')}
            style={mystyle.intersect}
          />
        </TouchableOpacity>
      </View>
      <VirtualizedList
        data={his}
        renderItem={renderhis}
        getItemCount={() => his.length}
        keyExtractor={item => item.id}
        getItem={(data, index) => data[index]}
      />
      <TouchableOpacity style={mystyle.btndown}>
        <Text style={mystyle.txtdown}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

export default His;
const mystyle = StyleSheet.create({
  body: {flex: 1, backgroundColor: '#0C0F14', padding: 20},
  txtdown: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 20,
  },
  namehisitem: {marginLeft: 20, width: '56%'},
  btndown: {
    width: 330,
    height: 60,
    backgroundColor: '#D17842',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flexShrink: 1,
    minHeight: 154,
    borderRadius: 23,
    marginTop: 20,
    paddingBottom: 18,
  },
  sizeitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 18,
    margin: 5,
  },
  itemsize: {
    width: 1,
    height: 35,
    backgroundColor: '#0C0F14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtitem3: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  txtitem2: {
    color: '#D17842',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  txtitem1: {
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 20,
  },
  txttime2: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '300',
    opacity: 0.7,
  },
  txttime1: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  time: {
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gr90: {
    marginTop: 20.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
    paddingBottom: 10,
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
  Rectangle_1: {
    flexShrink: 1,
    resizeMode: 'contain',
  },
});
