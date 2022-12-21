import React from "react";
import BookList from "./components/booklist.component";
import Navbar from "./components/navbar.component";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/theme-toggle.component";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
