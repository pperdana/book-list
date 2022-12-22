import React from "react";
import BookList from "./components/booklist.component";
import Navbar from "./components/navbar.component";
import ThemeContextProvider from "./contexts/theme.context";
import ThemeToggle from "./components/theme-toggle.component";
import AuthContextProvider from "./contexts/auth.context";
import BookContextProvider from "./contexts/book.context";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />

          <BookContextProvider>
            <BookList />
          </BookContextProvider>

          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
