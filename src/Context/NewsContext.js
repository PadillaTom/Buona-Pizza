// Menu Context:
// Fetching Firebase Data to be Passed Everywhere within APP
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

// Context:
export const NewsContext = React.createContext();

export default function NewsProvider({ children }) {
  // FIREBASE DATA ----->
  // State for Firebase:
  const [news, setNews] = useState([]);
  const [latest, setLatest] = useState([]);

  // Firebase:
  React.useEffect(() => {
    db.collection('news').onSnapshot((snapshot) => {
      setNews(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    db.collection('news')
      .where('featured', '==', true)
      .onSnapshot((snapshot) => {
        setLatest(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  // Main:
  return (
    <NewsContext.Provider value={{ news, latest }}>
      {children}
    </NewsContext.Provider>
  );
}
