import {ActionCreator} from "redux";
import {IUserData} from "../types/types";

export const EDIT_FIRST_NAME = 'EDIT_FIRST_NAME';
export const EDIT_LAST_NAME = 'EDIT_LAST_NAME';
export const EDIT_EMAIL = 'EDIT_EMAIL';
export const ADD_USER_TO_LIST = 'ADD_USER_TO_LIST';
export const GET_LOCALSTORAGE = 'GET_LOCALSTORAGE';

export type EditFirstNameAction = {
  type: typeof EDIT_FIRST_NAME;
  data: string,
}
export type EditLastNameAction = {
  type: typeof EDIT_LAST_NAME;
  data: string,
}
export type EditEmailAction = {
  type: typeof EDIT_EMAIL;
  data: string,
}
export type AddUserToListAction = {
  type: typeof ADD_USER_TO_LIST;
  data: IUserData,
}

export type GetLocalStorageAction = {
  type: typeof GET_LOCALSTORAGE;
  data: IUserData[];
}

export const editFirstName: ActionCreator<EditFirstNameAction> = (data) => ({
  type: EDIT_FIRST_NAME,
  data,
})

export const editLastName: ActionCreator<EditLastNameAction> = (data) => ({
  type: EDIT_LAST_NAME,
  data,
})

export const editEmail: ActionCreator<EditEmailAction> = (data) => ({
  type: EDIT_EMAIL,
  data,
})

export const addUserToList: ActionCreator<AddUserToListAction> = (data) => ({
  type: ADD_USER_TO_LIST,
  data,
})

export const getLocalstorage: ActionCreator<GetLocalStorageAction> = (data) => ({
  type: GET_LOCALSTORAGE,
  data,
})