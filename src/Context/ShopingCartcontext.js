import { createContext, useContext, useState } from "react";
import Cartsideitem from "../component/Shoppingcart";

const ShopingCartcontext = createContext({});

const ShopingCartProvider = ({ children }) => {
    const [Cartitem, Setcartitem] = useState([]);

    const getitemsquantity = (id) => {
        return Cartitem.find((item) => item.id === id)?.quantity || 0;
    };

    const increasecart = (id) => {
        Setcartitem((prevstate) => {
            if (prevstate.find((item) => item.id === id) == null) {
                return [...prevstate, { id, quantity: 1 }];
            } else {
                return prevstate.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreasecart = (id) => {
        Setcartitem((prevstate) => {
            if (prevstate.find((item) => item.id === id)?.quantity === 0) {
                return prevstate.filter((item) => item.id !== id);
                
            } else {
                return prevstate.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }

                });
               
            }
            
        });
        console.log(Cartitem)
    };

    const removefromcart = (id) => {
        Setcartitem((prevstate) => {
            return prevstate.filter((item) => item.id !== id);
        });
    };

    return (
        <ShopingCartcontext.Provider
            value={{ Cartitem, getitemsquantity, increasecart, decreasecart, removefromcart }}
        >
            {children}
            <Cartsideitem  />
        </ShopingCartcontext.Provider>
    );
};

export default ShopingCartProvider;

export const useShopingcart = () => {
    return useContext(ShopingCartcontext);
};
