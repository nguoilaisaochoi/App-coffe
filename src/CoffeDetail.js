import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Appcontext} from './Appcontext';
import AxiosInstance from './data/AxiosInstance';
const CoffeDetail = props => {
  const {navigation} = props;
  const {cart, setCart, favoriteProducts, setFavoriteProducts, id} =
    useContext(Appcontext);

  // lấy thông tin chi tiết sản phẩm từ api
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await AxiosInstance().get(`/products/${id}`);
        setProduct(response.product);
      } catch (error) {
        console.log(`Coffedetail báo lỗi ${error}`);
      }
    };
    getProduct();
  }, [id]);
  const goback = () => {
    navigation.navigate('Home');
  };

  // thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    const oneCartItem = {
      product_id: product._id,
      product_name: product.name,
      product_image: product.image,
      product_quantity: 1,
      product_price: product.price,
    };
    // kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const index = cart.findIndex(
      item => item.product_id.toString() == product._id,
    );
    if (index == -1) {
      // nếu chưa có thì thêm vào
      // spread operator
      ToastAndroid.show('Đã thêm vào giỏ', ToastAndroid.SHORT);
      setCart([...cart, oneCartItem]);
    } else {
      // nếu có rồi thì tăng số lượng lên 1
      const newCart = [...cart];
      newCart[index].product_quantity++;
      setCart(newCart);
    }
  };
  const checkFavorite = () => {
    // kiểm tra sản phẩm đã có trong danh sách yêu thích chưa
    const index = favoriteProducts.findIndex(
      item => item._id.toString() == product._id,
    );
    if (index == -1) {
      return false;
    }
    return true;
  };
  const addToFavorite = () => {
    // kiểm tra sản phẩm đã có trong danh sách yêu thích chưa
    const index = favoriteProducts.findIndex(
      item => item._id.toString() == product._id.toString(),
    );
    if (index == -1) {
      // nếu chưa có thì thêm vào
      // spread operator
      console.log(`Coffedetail báo Đã thêm vào mục yêu thích`);
      setFavoriteProducts([...favoriteProducts, product]);
    } else {
      // nếu có rồi thì xóa khỏi danh sách yêu thích
      const newFavoriteProducts = [...favoriteProducts];
      newFavoriteProducts.splice(index, 1);
      setFavoriteProducts(newFavoriteProducts);
    }
  };
  return (
    <View style={mystyle.container}>
      {product.image && (
        <Image style={mystyle.image} source={{uri: product.image}} />
      )}
      <View style={mystyle.gr90}>
        <TouchableOpacity onPress={goback}>
          <View style={mystyle.gr3}>
            <Image
              source={require('../assets/img/back.png')}
              style={mystyle.Rectangle_1}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={addToFavorite}>
          <View style={mystyle.gr3}>
            {checkFavorite() ? (
              <Image
                source={require('../assets/img/heartbtn.png')}
                style={mystyle.Rectangle_1}
              />
            ) : (
              <Image
                source={require('../assets/img/heartbtn_non.png')}
                style={mystyle.Rectangle_1}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={mystyle.container2}>
        <View style={mystyle.content1}>
          <View style={mystyle.content1_1}>
            <Text style={mystyle.txtname}>{product.name}</Text>
            <Text style={{fontSize: 12, color: '#AEAEAE', fontWeight: '400'}}>
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
            <Text style={mystyle.txtcontent2_1}>{product.rating}.0</Text>
            <Text style={mystyle.txtcontent2_2}>({product.voting})</Text>
          </View>
          <TouchableOpacity style={mystyle.btnconent2}>
            <Text style={{fontSize: 10, fontWeight: '500', color: '#AEAEAE'}}>
              Medium Roasted
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={mystyle.container3}>
        <Text style={mystyle.txtcontainer3}>Description</Text>
        <Text style={mystyle.txtcontainer3_2}>{product.description}</Text>
        <Text style={mystyle.txtcontainer3}>Size</Text>
        <View style={mystyle.selectsize}>
          <TouchableOpacity style={[mystyle.btnsize, {borderColor: '#D17842'}]}>
            <Text style={{fontSize: 12, color: '#D17842'}}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mystyle.btnsize}>
            <Text style={{fontSize: 12, color: '#AEAEAE'}}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mystyle.btnsize}>
            <Text style={{fontSize: 12, color: '#AEAEAE'}}>L</Text>
          </TouchableOpacity>
        </View>
        <View style={mystyle.footer}>
          <View style={mystyle.txtprice}>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#AEAEAE'}}>
              Price
            </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
              <Text style={{color: '#D17842'}}>$ </Text>
              {product.price}
            </Text>
          </View>
          <TouchableOpacity style={mystyle.btnadd} onPress={addToCart}>
            <Text style={mystyle.txtadd}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeDetail;
const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  txtname: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginTop: 20,
    height: 50,
  },
  gr90: {
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 1,
    top: 30,
    left: 20,
    right: 20,
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
  selectsize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  txtcontainer3: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 9,
  },
  txtcontainer3_2: {
    marginTop: 15,
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 20,
    height: 70,
  },
  txtprice: {
    width: '30%',
    height: 'auto',
    alignItems: 'center',
  },
  txtadd: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  footer: {
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  btnadd: {
    width: 240,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#D17842',
    justifyContent: 'center',
  },
  btnsize: {
    width: 100,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#141921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '37%',
    backgroundColor: '#0C0F14',
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
  content2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexShrink: 1,
    height: '43%',
    marginTop: 18,
    alignItems: 'center',
    marginRight: 10,
  },
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

  content1_1: {width: '55%', marginLeft: 20, justifyContent: 'center'},
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
    bottom: '37%',
    height: '16%',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
  },
  image: {
    width: '100%',
    height: '80%',
    marginBottom: '50%',
  },
});
