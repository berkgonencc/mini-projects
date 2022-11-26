import NavBar from "./components/navbar/NavBar";
import Users from "./components/users/Users";
import Axios from "axios";
import { useState } from "react";
import Search from "./components/search/Search";
import MyAlert from "./components/myalert/MyAlert";

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
    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  };
  
  return (
    <>
      <NavBar />
      <MyAlert alert={alert} show={show} setShow={setShow}/>
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClearButton={users.length > 0 ? true : false}
        initAlert={initAlert}
        setShow={setShow}
      />
      <Users users={users} loading={loading} />
    </>
  );
}

export default App;
