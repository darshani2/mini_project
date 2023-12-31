import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

function Donhis() {
  const [users] = useState([
    {
      Name: "Darshanie",
      Email: "sewwandidarshani95@gmail.com",
      Phone_Number: "123-456-7890",
      NIC: "956880356V",
      Types_of_Items: "Clothes",
      Quantity: 5,
      Location: "City"
    }
  ]);

  return (
    <div className="donhis">
      <div className="bor">
        <Link to="/makedon" className="btn1">
          ADD +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>NIC</th>
              <th>Types of Items</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Phone_Number}</td>
                  <td>{user.NIC}</td>
                  <td>{user.Types_of_Items}</td>
                  <td>{user.Quantity}</td>
                  <td>{user.Location}</td>
                  
                  <Link to="/donate" className="btn1"> Donate </Link>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Donhis;
