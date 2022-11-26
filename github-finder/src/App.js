import Axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SearchPage from "./pages/searchPage/SearchPage";
import Layout from "./pages/layout/Layout";
function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);
  const [show, setShow] = useState(true);

  const searchUsers = (keyword) => {
    setLoading(true);
    Axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (response) => {
        setUsers(response.data.items);
        setLoading(false);
      }
    );
  };
  const clearUsers = () => {
    setUsers([]);
  };
  const initAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <BrowserRouter>
        <Layout alert={alert} show={show} setShow={setShow}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/search"
            element={
              <SearchPage
                searchUsers={searchUsers}
                clearUsers={clearUsers}
                showClearButton={users.length > 0 ? true : false}
                initAlert={initAlert}
                setShow={setShow}
                users={users}
                loading={loading}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
