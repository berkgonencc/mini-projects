import NavBar from "./components/navbar/NavBar";
import Users from "./components/users/Users";
import Axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      Axios.get("http://api.github.com/users").then((res) => {
        setUsers(res.data);
        setLoading(false);
      });
    }, 2000);
  }, []);

  return (
    <>
      <NavBar />
      <Users users={users} loading={loading} />
    </>
  );
}

export default App;
