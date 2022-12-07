import Axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SearchPage from "./pages/searchPage/SearchPage";
import Layout from "./pages/layout/Layout";
import { AppContext } from "./contexts/AppContext";
import UserDetailsPage from "./pages/userDetailsPage/UserDetailsPage";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);
  const [show, setShow] = useState(true);
  const [showClearButton, setShowClearButton] = useState(false);
  const [user, setUser] = useState({});
  // const [repos, setRepos] = useState({});
  // const getRepos = (userName) => {
  //   Axios.get(`https://api.github.com/users/${userName}/repos`).then(
  //     (response) => {
  //       setRepos(response.data);
  //     }
  //   );
  // };

  const getUser = (userName) => {
    setLoading(true);
    Axios.get(`https://api.github.com/users/${userName}`).then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  };
  const searchUsers = (keyword) => {
    setLoading(true);
    Axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (response) => {
        if (response.data.total_count > 0) {
          setUsers(response.data.items);
          setShowClearButton(true);
        } else {
          setUsers([]);
          setShow(true);
          initAlert("No Result!", "warning");
          setShowClearButton(false);
        }
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
    }, 2000);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          alert,
          show,
          setShow,
          searchUsers,
          clearUsers,
          initAlert,
          users,
          loading,
          showClearButton,
          setShowClearButton,
          user,
          getUser,
          // repos,
          // getRepos,
        }}
      >
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/getuser/:login" element={<UserDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
