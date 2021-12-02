import Axios from "axios";
import { useState } from "react";

const GetUser = () => {
  const [data, setData] = useState();
  const returnUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className='ChildContainer'>
        <h2>Get User</h2>
        <button onClick={returnUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
  </div>
  );
};

export default GetUser;
