import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const BeansDetail = (props) => {
    const {navigation} = props;
    const goback = () => {
      navigation.navigate('Home');
    };
  return (
    <View style={mystyle.container}>
      <Image
        source={require('../assets/img/pexels_photo_4109744.png')}
        style={mystyle.image}
      />
      <View style={mystyle.gr90}>
        <TouchableOpacity onPress={goback}>
          <View style={mystyle.gr3}>
            <Image
              source={require('../assets/img/back.png')}
              style={mystyle.Rectangle_1}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={mystyle.gr3}>
            <Image
              source={require('../assets/img/heartbtn.png')}
              style={mystyle.Rectangle_1}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View></View>
      <View style={mystyle.container2}>
        <View style={mystyle.content1}>
          <View style={mystyle.content1_1}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>
              Robusta Beans
            </Text>
            <Text style={{fontSize: 12, color: '#AEAEAE', fontWeight: '400'}}>
              From Africa
            </Text>
          </View>
          <View style={mystyle.beans}>
            <Image
              source={require('../assets/img/Group_19.png')}
              style={{width: 31, height: 31}}
            />
            <Text style={{color: 'white', fontSize: 10}}>Beans</Text>
          </View>
          <View style={mystyle.beans}>
            <Image
              source={require('../assets/img/location.png')}
              style={{width: 29, height: 29}}
            />
            <Text style={{color: 'white', fontSize: 10}}>Africa</Text>
          </View>
        </View>
        <View style={mystyle.content2}>
          <View style={mystyle.txtcontent2}>
            <Image
              source={require('../assets/img/star.png')}
              style={{width: 22, height: 22}}
            />
            <Text style={mystyle.txtcontent2_1}>4.5</Text>
            <Text style={mystyle.txtcontent2_2}>(6,879)</Text>
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
        <Text style={mystyle.txtcontainer3_2}>
          Arabica beans are by far the most popular type of coffee beans, making
          up about 60% of the world’s coffee. These tasty beans originated many
          centuries ago in the highlands of Ethiopia, and may even be the first
          coffee beans ever consumed!
        </Text>
        <Text style={mystyle.txtcontainer3}>Size</Text>
        <View style={mystyle.selectsize}>
          <TouchableOpacity style={[mystyle.btnsize, {borderColor: '#D17842'}]}>
            <Text style={{fontSize: 12, color: '#D17842'}}>250gm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mystyle.btnsize}>
            <Text style={{fontSize: 12, color: '#D17842'}}>250gm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mystyle.btnsize}>
            <Text style={{fontSize: 12, color: '#D17842'}}>250gm</Text>
          </TouchableOpacity>
        </View>
        <View style={mystyle.footer}>
          <View style={mystyle.txtprice}>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#AEAEAE'}}>
              Price
            </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
              <Text style={{color: '#D17842'}}>$ </Text>10.50
            </Text>
          </View>
          <TouchableOpacity style={mystyle.btnadd}>
            <Text style={mystyle.txtadd}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BeansDetail;
const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginBottom: 10,
  },
  beans: {
    marginRight: 30,
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
    height: '18%',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
  },
  image: {
    flexShrink: 1,
    resizeMode: 'contain',
    marginBottom: '50%',
  },
});
