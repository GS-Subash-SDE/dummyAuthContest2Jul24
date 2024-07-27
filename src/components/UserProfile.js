
// email: "emily.johnson@x.dummyjson.com";
// firstName: "Emily";
// gender: "female";
// id: 1;
// image: "https://dummyjson.com/icon/emilys/128";
// lastName: "Johnson";
// refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MjIwNzc2NDQsImV4cCI6MTcyNDY2OTY0NH0.nZFYX7-XU7M0RUSXjMq1D5DqxmgXmNR43g5DlRNIr0Y";
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MjIwNzc2NDQsImV4cCI6MTcyMjA4MTI0NH0.6cQQp4Az1UdZi31hSABs2lJ92MytbwQetESL6v3C9IU";
// username: "emilys";

import { useEffect, useState } from "react";
import { getUserData } from "./auth";

export default function UserProfile() {
  const [apiStatus, setApiStatus] = useState('init');
  const userObj = JSON.parse(localStorage.getItem("user"));
 
  useEffect(() => {
    const userId = userObj.id;
    async function getData() {
      setApiStatus('pending');
      const status = await getUserData(userId);
      console.log(status);
      setApiStatus(status);
    }
    getData();
    console.log('profile executed effect');
  },[]);
  return (
    <div className="userProfile">
      {apiStatus === "success" && (
        <div>
          <p>id:{userObj.id}</p>
          <p>firstName:{userObj.firstName}</p>
          <p>lastName:{userObj.lastName}</p>
          <p>maidenName:{userObj.maidenName}</p>
          <p>age:{userObj.age}</p>
          <p>email:{userObj.email}</p>
          <p>phone:{userObj.phone}</p>
          <p>username:{userObj.username}</p>
          <p>password:{userObj.password}</p>
          <p>birthDate:{userObj.birthDate}</p>
          <img src={userObj.image} alt={`${userObj.username} image`} />
          <p>bloodGroup:{userObj.bloodGroup}</p>
          <p>height:{userObj.height}</p>
          <p>eyeColor:{userObj.eyeColor}</p>
          {/* <p>hair:{userObj.hair}</p> */}

          <ul>
            <li>hair color:{userObj.hair.color}</li>
            <li>hair type:{userObj.hair.type}</li>
          </ul>
          <p>ip:{userObj.ip}</p>
          <ul>
            <li>address: {userObj.address.address}</li>
            <li>city{userObj.address.city}</li>
            <li>state{userObj.address.state}</li>
            <li>stateCode{userObj.address.stateCode}</li>
            <li>postalCode{userObj.address.postalCode}</li>
            <ul>
              <li>latitude: {userObj.address.coordinates.lat}</li>
              <li>longitude: {userObj.address.coordinates.lng}</li>
            </ul>
            <li>country{userObj.address.country}</li>
          </ul>
          <p>macAddress:{userObj.macAddress}</p>
          <p>university:{userObj.university}</p>
          <p>userAgent:{userObj.userAgent}</p>
          <p>role:{userObj.role}</p>
        </div>
      )}
    </div>
  ); 
}