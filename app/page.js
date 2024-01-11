"use client";
import Navbar from "./componants/navbar";
import Footer from "./componants/page";
import Componant from "./componants/componant";
import { useEffect, useState } from "react";

export default function Home() {
  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  });

  const savecart = (Newcart) => {
    localStorage.setItem("cart", Newcart);
    let subt = 0;
    keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      subt += Newcart[keys[i]].price * Newcart[keys[i]].qty;
    }
    setsubTotal(subt);
  };

  const addTocart = (itemCode, qty, price, name, size, varient) => {
    let Newcart = cart;
    console.log(Newcart);
    if (itemCode in cart) {
      Newcart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      Newcart[itemCode] = { qty: 1, price, name, size, varient };
    }
    setcart(Newcart);
    savecart(Newcart);
  };

  const removetocart = (itemCode, qty, price, name, size, varient) => {
    
    let Newcart = cart;
    if (itemCode in cart) {
      Newcart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (Newcart[itemCode].qty <= 0) {
      delete Newcart[itemCode];
    }
    setcart(Newcart);
    savecart(Newcart);
  };
  const clearCart = () => {
    setcart({});
    savecart({});
    console.log("cart has been cleared");
  };
  
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar
        cart={cart}
        addTocart={addTocart}
        removetocart={removetocart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Componant
        cart={cart}
        addTocart={addTocart}
        removetocart={removetocart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Footer />
    </main>
  );
}
