import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
