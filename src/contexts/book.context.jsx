import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "the way of king", id: 1 },
    { title: "the name if the wing", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the heros of ages", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
