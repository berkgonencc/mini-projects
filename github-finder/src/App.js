import NavBar from "./components/navbar/NavBar";
import Users from "./components/users/Users";
import Axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";
import Search from "./components/search/Search";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const searchUsers = (keyword) => {
    setLoading(true);
    Axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (response) => {
        setUsers(response.data.items);
        setLoading(false);
      }
    );
  };
  return (
    <>
      <NavBar />
      <Search searchUsers={searchUsers} />
      <Users users={users} loading={loading} />
    </>
  );
}

export default App;
