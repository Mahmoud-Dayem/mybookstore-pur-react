import BooksPage from "./views/BooksPage.jsx";
import SingleBookPage from "./views/SingleBookPage.jsx";
import AddBookPage from "./views/AddBookPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/book/:id" element={<SingleBookPage />} />
          <Route path="/add" element={<AddBookPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}
