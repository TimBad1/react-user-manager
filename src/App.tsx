import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {AddUser} from "./components/AddUser";
import {ViewList} from "./components/ViewList";
import {useDispatch} from "react-redux";
import {getLocalstorage} from "./store/actions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('users')){
      const users = localStorage.getItem('users');
      const id = localStorage.getItem('id');

      if (users) {
        dispatch(getLocalstorage([JSON.parse(users), Number(id)]));
      }
    }
  })
  return (
    <div className="App">
      <Header />
      <AddUser />
      <ViewList />
    </div>
  );
}

export default App;
