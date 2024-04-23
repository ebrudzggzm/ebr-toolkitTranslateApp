import axios from "axios";
import { useEffect } from "react";
import { setError, setUsers, setisLoading } from "../app/slices/classicSlice";
import { useDispatch, useSelector } from "react-redux";

const UserListClasics = () => {
  const dispatch = useDispatch();
  const { isLoading, users, isError } = useSelector(
    (store) => store.classicReducer
  );
  console.log(users, "user");

  useEffect(() => {
    dispatch(setisLoading());
    axios
      .get("https://jsonplaceholder.typicode.com/users11")
      .then((res) => dispatch(setUsers(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);
  return (
    <div>
      {isLoading ? <h1>Yükleniyor...</h1> :isError ? <h1>{isError}</h1> : users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserListClasics;
