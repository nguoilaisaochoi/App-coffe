import React, {useContext, useState, createContext} from 'react';

export const Appcontext = createContext();
export const Appprovider = props => {
  const [islogin, setIsLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [id, set_ID] = useState([]);
  const [account, setAccount] = useState([]);
  //lưu email,pass ở userdata
  const [userdata, setUserdata] = useState([]);
  const [his, setHis] = useState([]);
   const [itemhis, setItemhis] = useState([]);
  return (
    <Appcontext.Provider
      value={{
        islogin,
        setIsLogin,
        cart,
        setCart,
        favoriteProducts,
        setFavoriteProducts,
        id,
        set_ID,
        account,
        setAccount,
        his,
        setHis,
        itemhis,
        setItemhis,
        userdata,
        setUserdata,
      }}>
      {props.children}
    </Appcontext.Provider>
  );
};
