import React from 'react';
import './viewlist.sass';
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {IUserData} from "../../types/types";
// import usersList from "../data/usersList";
export function ViewList() {
  const usersList= useSelector<RootState, IUserData[]>(state => state.usersList);

  return (
    <table className="table">
      <thead>
        <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      {usersList && usersList.map(item => {
        return  (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}
