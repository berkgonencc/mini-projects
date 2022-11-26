import React from 'react'
import Users from "../../components/users/Users";
import Search from "../../components/search/Search";

const SearchPage = ({searchUsers, clearUsers, showClearButton, initAlert, setShow, users, loading}) => {
  return (
    <>
    <Search
            searchUsers={searchUsers}
            clearUsers={clearUsers}
            showClearButton={users.length > 0 ? true : false}
            initAlert={initAlert}
            setShow={setShow}
          />
          <Users users={users} loading={loading} />
    </>
  )
}

export default SearchPage