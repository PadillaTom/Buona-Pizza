// Menu Context:
// Fetching Firebase Data to be Passed Everywhere within APP
import React, { useState, useEffect } from 'react';
import db from '../firebase';
// Helpers:

// Context:
export const MenuContext = React.createContext();

export default function MenuProvider({ children }) {
  // FIREBASE DATA ----->
  // State for Firebase:
  const [pizze, setPizze] = useState([]);
  const [promo, setPromo] = useState([]);

  // useEffect to fetch Pizzas:
  // 1) Collection --> Menu
  // 2) DOCS --> Each Pizza
  // 3) DATA --> Pizza Info
  useEffect(() => {
    db.collection('menu').onSnapshot((snapshot) => {
      setPizze(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    db.collection('menu')
      .where('promo', '==', true)
      .onSnapshot((snapshot) => {
        setPromo(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  // Main:
  return (
    <MenuContext.Provider value={{ pizze, promo }}>
      {children}
    </MenuContext.Provider>
  );
}
