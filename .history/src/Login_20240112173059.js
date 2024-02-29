import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
      }}>
      <div
        style={{
          paddingTop: 16,
          paddingBottom: 8,
          paddingLeft: 29.5,
          paddingRight: 29,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            display: 'inline-flex',
          }}>
          <div
            style={{
              color: 'white',
              fontSize: 17,
              fontFamily: 'SF Pro Text',
              fontWeight: '600',
              wordWrap: 'break-word',
            }}>
            9:41
          </div>
        </div>
      </div>
      <div style={{width: 164, height: 44}} />
      <div style={{width: 93.5, height: 44, position: 'relative'}}>
        <div
          style={{
            left: 9,
            top: 18,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 4,
              display: 'inline-flex',
            }}>
            <div style={{width: 20, height: 14, position: 'relative'}}>
              <div
                style={{
                  width: 3.2,
                  height: 12,
                  left: 16.35,
                  top: 1,
                  position: 'absolute',
                  background: 'white',
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 3.2,
                  height: 9.6,
                  left: 11.05,
                  top: 3.4,
                  position: 'absolute',
                  background: 'white',
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 3.2,
                  height: 7,
                  left: 5.75,
                  top: 6,
                  position: 'absolute',
                  background: 'white',
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 3.2,
                  height: 4.6,
                  left: 0.45,
                  top: 8.4,
                  position: 'absolute',
                  background: 'white',
                  borderRadius: 1,
                }}
              />
            </div>
            <div
              style={{
                width: 20,
                height: 12,
                paddingLeft: 2.16,
                paddingRight: 2.16,
                paddingTop: 0.5,
                paddingBottom: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              <div style={{width: 15.68, height: 11, position: 'relative'}}>
                <div
                  style={{
                    width: 4.81,
                    height: 3.37,
                    left: 5.43,
                    top: 7.63,
                    position: 'absolute',
                    background: 'white',
                  }}></div>
                <div
                  style={{
                    width: 10.25,
                    height: 3.65,
                    left: 2.71,
                    top: 3.82,
                    position: 'absolute',
                    background: 'white',
                  }}></div>
                <div
                  style={{
                    width: 15.68,
                    height: 4.75,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    background: 'white',
                  }}></div>
              </div>
            </div>
            <div style={{width: 28, height: 14, position: 'relative'}}>
              <div
                style={{
                  width: 21,
                  height: 9,
                  left: 2,
                  top: 2.5,
                  position: 'absolute',
                  background: 'white',
                  borderRadius: 1.33,
                }}
              />
              <img
                style={{
                  width: 27.5,
                  height: 13,
                  left: 0,
                  top: 0.5,
                  position: 'absolute',
                  opacity: 0.4,
                }}
                src="https://via.placeholder.com/27x13"
              />
            </div>
          </div>
        </div>
        <div
          style={{width: 6, height: 6, left: 6, top: 6, position: 'absolute'}}>
          <div
            style={{
              width: 6,
              height: 6,
              left: 0,
              top: 0,
              position: 'absolute',
              borderRadius: 9999,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
/*const mystyle = StyleSheet.create({
  body: {
    padding: 10,
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins-Medium',
    //backgroundColor: '#0C0F14',
  },
  head: {
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  logo: {
    margin: 'auto',
  },
  welcome: {
    color: '#FFF',
    fontSize: 16,

    fontWeight: '700',
    letterSpacing: 0.5,
  },
  welcome2: {
    color: '#828282',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  input: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
  },
});*/
