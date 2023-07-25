import React, {useEffect, useState} from 'react';
import './custominput.sass';
import {useDispatch, useSelector} from "react-redux";
import {editEmail, editFirstName, editLastName} from "../../../store/actions";
import {RootState} from "../../../store/reducer";
import {IUserData} from "../../../types/types";

interface ICustomInput {
  label: string;
  type: string;
  placeholder: string;
  dispatchEvent: string;
}

export function CustomInput({label, type, placeholder, dispatchEvent}: ICustomInput) {
  const dispatch = useDispatch();
  const newId = useSelector<RootState>(state => state.newUser.id); // временный костыль для очистки формы
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function handleChange(dispatchEvent: string, e: string) {
    setValue(e)
    switch (dispatchEvent) {
      case 'first_name':
        dispatch(editFirstName(e));
        break;
      case 'last_name':
        dispatch(editLastName(e));
        break;
      case 'email':
        dispatch(editEmail(e));
        break;
    }
  }

  useEffect(() => {
    setValue('');
  }, [newId])

  return (
      <label className="form__label">
        <span className="form__label-title">{label}</span>
        <input type={type} placeholder={placeholder} onChange={(e) => handleChange(dispatchEvent, e.target.value)} value={value}/>
      </label>
  );
}
