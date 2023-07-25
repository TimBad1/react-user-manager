import React from 'react';
import './adduser.sass';
import {CustomInput} from "./CustomInput";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {addUserToList, editEmail, editFirstName, editLastName} from "../../store/actions";
import {IUserData} from "../../types/types";
import {isError} from "util";
import {isValidDateValue} from "@testing-library/user-event/dist/utils";

const addFormFields = [
  {
    label: 'Введите имя',
    type: 'text',
    placeholder: 'Имя*',
    dispatchEvent: 'first_name',
  },{
    label: 'Введите фамилию',
    type: 'text',
    placeholder: 'Фамилия',
    dispatchEvent: 'last_name',
  },{
    label: 'Введите email',
    type: 'text',
    placeholder: 'Email*',
    dispatchEvent: 'email',
  },
]

function isValidateFields(obj: any) {
  console.log(obj)
  for(let key in obj) {
    if(!obj[key]){
      return false
    }
  }

  return true;
}
export function AddUser() {
  const dispatch = useDispatch();
  const user = useSelector<RootState, IUserData>(state => state.newUser)
  function addUser() {
    if(isValidateFields(user)){
      dispatch(addUserToList(user));
    }
  }

  return (
    <form className="form" action="#">
      {addFormFields.map(el => {
        return <CustomInput label={el.label} type={el.type} key={el.dispatchEvent} placeholder={el.placeholder} dispatchEvent={el.dispatchEvent} />
      })}

      <div className="form__button-wrap">
        {/*<button className="form__button form__button_remove" type="submit">Удалить</button>*/}
        <button className="form__button form__button_add" type="submit" onClick={addUser}>Добавить</button>
      </div>
    </form>
  );
}
